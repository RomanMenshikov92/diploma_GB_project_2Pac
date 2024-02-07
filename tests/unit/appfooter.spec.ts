import { shallowMount, mount } from "@vue/test-utils";
import AppFooter from "@/components/Footer/AppFooter.vue";
import Logo from "@/components/Common/Logo.vue";
import Copyright from "@/components/Footer/Сopyright.vue";
import { Pinia, createPinia } from "pinia";

jest.mock("@/components/Common/Logo.vue", () => ({
  name: "Logo",
  render: jest.fn(),
}));

jest.mock("@/components/Footer/Сopyright.vue", () => ({
  name: "Copyright",
  render: jest.fn(),
}));

describe("AppFooter.vue", () => {
  it("renders in AppFooter components: Logo", () => {
    const pinia: Pinia = createPinia();

    const wrapper = shallowMount(AppFooter, {
      global: {
        plugins: [pinia],
      },
    });
    expect(wrapper.findComponent(Logo).exists()).toBe(true);
  });

  it("renders in AppFooter components: Copyright", () => {
    const pinia: Pinia = createPinia();

    const wrapper = shallowMount(AppFooter, {
      global: {
        plugins: [pinia],
      },
    });
    expect(wrapper.findComponent(Copyright).exists()).toBe(true);
  });

  it("renders correct Pug in footer layout", () => {
    const pinia: Pinia = createPinia();

    const wrapper = mount(AppFooter, {
      global: {
        plugins: [pinia],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
