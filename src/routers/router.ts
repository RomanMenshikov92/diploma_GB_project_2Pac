import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BiographyView from "@/views/BiographyView.vue";
import DiscographyView from "@/views/DiscographyView.vue";
import VideographyView from "@/views/VideographyView.vue";
import FilmographyView from "@/views/FilmographyView.vue";
import BooksView from "@/views/BooksView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import scrollBehavior from "./scrollBehavior";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { preserveState: true },
  },
  {
    path: "/biography",
    name: "biography",
    component: BiographyView,
    meta: { preserveState: true },
  },
  {
    path: "/discography",
    name: "discography",
    component: DiscographyView,
    meta: { preserveState: true },
  },
  {
    path: "/videography",
    name: "videography",
    component: VideographyView,
    meta: { preserveState: true },
  },
  {
    path: "/filmography",
    name: "filmography",
    component: FilmographyView,
    meta: { preserveState: true },
  },
  {
    path: "/books",
    name: "books",
    component: BooksView,
    meta: { preserveState: true },
  },
  {
    path: "/:pathMatch(.*)",
    name: "not-found",
    component: NotFoundView,
    meta: { preserveState: true, isNotFound: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
});

export default router;
