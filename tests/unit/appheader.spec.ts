import { shallowMount, mount } from "@vue/test-utils";
import AppHeader from "@/components/Header/AppHeader.vue";
import NavMenu from "@/components/Header/NavMenu.vue";
import { Pinia, createPinia } from "pinia";

jest.mock("@/components/Header/NavMenu.vue", () => ({
  name: "NavMenu",
  render: jest.fn(),
}));

describe("AppHeader.vue", () => {
  it("renders in AppHeader components: NavMenu", () => {
    const pinia: Pinia = createPinia();

    const wrapper = shallowMount(AppHeader, {
      global: {
        plugins: [pinia],
      },
    });
    expect(wrapper.findComponent(NavMenu).exists()).toBe(true);
  });

  it("renders correct Pug in header layout", () => {
    const pinia: Pinia = createPinia();

    const wrapper = mount(AppHeader, {
      global: {
        plugins: [pinia],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
