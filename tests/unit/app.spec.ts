import { shallowMount, mount } from "@vue/test-utils";
import App from "@/App.vue";
import AppHeader from "@/components/Header/AppHeader.vue";
import AppMain from "@/components/Main/AppMain.vue";
import AppFooter from "@/components/Footer/AppFooter.vue";
import { Pinia, createPinia } from "pinia";
import NotFoundView from "@/views/NotFoundView.vue";
import { createRouter, createWebHistory } from "vue-router";

jest.mock("@/components/Header/AppHeader.vue", () => ({
  name: "AppHeader",
  render: jest.fn(),
}));

jest.mock("@/components/Main/AppMain.vue", () => ({
  name: "AppMain",
  render: jest.fn(),
}));

jest.mock("@/components/Footer/AppFooter.vue", () => ({
  name: "AppFooter",
  render: jest.fn(),
}));

jest.mock("@/views/NotFoundView.vue", () => ({
  name: "NotFoundView",
  render: jest.fn(),
}));

describe("App.vue", () => {
  it("renders in App components: AppHeader, AppMain, AppFooter", () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/:pathMatch(.*)",
          name: "not-found",
          component: NotFoundView,
        },
      ],
    });
    const wrapper = shallowMount(App, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.findComponent(AppHeader).exists()).toBe(true);
    expect(wrapper.findComponent(AppMain).exists()).toBe(true);
    expect(wrapper.findComponent(AppFooter).exists()).toBe(true);
  });

  // it("renders in App store", () => {
  //   const pinia: Pinia = createPinia();
  //   const wrapper = shallowMount(App, {
  //     global: {
  //       plugins: [pinia],
  //     },
  //   });
  //   expect(wrapper.vm.$pinia).toBeDefined();
  // });

  it("renders correct Pug in app layout", () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/:pathMatch(.*)",
          name: "not-found",
          component: NotFoundView,
        },
      ],
    });
    const pinia: Pinia = createPinia();
    const wrapper = mount(App, {
      global: {
        plugins: [pinia, router],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
