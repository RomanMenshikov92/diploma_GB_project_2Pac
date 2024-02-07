import { mount } from "@vue/test-utils";
import AppMain from "@/components/Main/AppMain.vue";
import HomeView from "@/views/HomeView.vue";
import BiographyView from "@/views/BiographyView.vue";
import DiscographyView from "@/views/DiscographyView.vue";
import VideographyView from "@/views/VideographyView.vue";
import FilmographyView from "@/views/FilmographyView.vue";
import BooksView from "@/views/BooksView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import { Pinia, createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

jest.mock("@/views/HomeView.vue", () => ({
  name: "HomeView",
  render: jest.fn(),
}));

jest.mock("@/views/BiographyView.vue", () => ({
  name: "BiographyView",
  render: jest.fn(),
}));

jest.mock("@/views/DiscographyView.vue", () => ({
  name: "DiscographyView",
  render: jest.fn(),
}));

jest.mock("@/views/VideographyView.vue", () => ({
  name: "VideographyView",
  render: jest.fn(),
}));

jest.mock("@/views/FilmographyView.vue", () => ({
  name: "FilmographyView",
  render: jest.fn(),
}));

jest.mock("@/views/BooksView.vue", () => ({
  name: "BooksView",
  render: jest.fn(),
}));

jest.mock("@/views/NotFoundView.vue", () => ({
  name: "NotFoundView",
  render: jest.fn(),
}));

describe("AppMain.vue", () => {
  it("renders correct Pug in main layout", () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/biography",
          name: "biography",
          component: BiographyView,
        },
        {
          path: "/discography",
          name: "discography",
          component: DiscographyView,
        },
        {
          path: "/videography",
          name: "videography",
          component: VideographyView,
        },
        {
          path: "/filmography",
          name: "filmography",
          component: FilmographyView,
        },
        {
          path: "/books",
          name: "books",
          component: BooksView,
        },
        {
          path: "/:pathMatch(.*)",
          name: "not-found",
          component: NotFoundView,
        },
      ],
    });

    const pinia: Pinia = createPinia();

    const wrapper = mount(AppMain, {
      global: {
        plugins: [pinia, router],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
  it("renders correct components for each route", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/biography",
          name: "biography",
          component: BiographyView,
        },
        {
          path: "/discography",
          name: "discography",
          component: DiscographyView,
        },
        {
          path: "/videography",
          name: "videography",
          component: VideographyView,
        },
        {
          path: "/filmography",
          name: "filmography",
          component: FilmographyView,
        },
        {
          path: "/books",
          name: "books",
          component: BooksView,
        },
        {
          path: "/:pathMatch(.*)",
          name: "not-found",
          component: NotFoundView,
        },
      ],
    });

    const wrapper = mount(AppMain, {
      global: {
        plugins: [router],
      },
    });

    await router.isReady();
    await router.push("/");
    expect(wrapper.findComponent({ name: "HomeView" }).exists()).toBe(true);
    await router.push("/biography");
    expect(wrapper.findComponent({ name: "BiographyView" }).exists()).toBe(true);
    await router.push("/discography");
    expect(wrapper.findComponent({ name: "DiscographyView" }).exists()).toBe(true);
    await router.push("/videography");
    expect(wrapper.findComponent({ name: "VideographyView" }).exists()).toBe(true);
    await router.push("/filmography");
    expect(wrapper.findComponent({ name: "FilmographyView" }).exists()).toBe(true);
    await router.push("/books");
    expect(wrapper.findComponent({ name: "BooksView" }).exists()).toBe(true);
    await router.push("/:pathMatch(.*)");
    expect(wrapper.findComponent({ name: "NotFoundView" }).exists()).toBe(true);
  });
});
