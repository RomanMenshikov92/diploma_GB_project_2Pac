<template lang="pug">
nav.header__nav
  ul.list-reset.header__list
    li(
      v-for="(item, index) in menu"
      :key="index"
      class="header__item"
      :class="{'header__item--active': isActive(item.href), 'header__item--active-logo': index === 0 && isHomeActive}"
    )
      RouterLink(
        :to="item.href"
        class="header__link"
        :class="{'header__link--active': isActive(item.href), 'header__link--active-logo': index === 0 && isHomeActive}"
      ) {{ item.name }}
        Logo(v-if="index === 0 && item.href === '/'")
  .header__logo
    RouterLink(
      :to="menu[0].href"
      class="header__logo-link"
      :class="{'header__logo-link--active': isActive(menu[0].href)}"
    ) {{ menu[0].name }}
      Logo(v-if="menu[0].href === '/'")
  button.btn-reset.header__btn-burger(@click="handleToggleMenu")
    BurgerIcon(
      class="header__btn-burger-svg"
      :class="{'header__btn-burger-svg--active': isMenuOpen, 'header__btn-burger-svg--non-active': !isMenuOpen}"
    )
  .header__menu(
    v-show="isMenuOpen"
    :class="{'header__menu--open': isMenuOpen}"
    @wheel.prevent
    @touchmove.prevent
    @scroll.prevent
  )
    ul.list-reset.header__menu-list
      li(
          v-for="(item, index) in tabletMenu"
          :key="index"
          class="header__menu-item"
          :class="{'header__menu-item--active': isActive(item.href)}"
        )
          RouterLink(
            :to="item.href"
            class="header__menu-link"
            :class="{'header__menu-link--active': isActive(item.href)}"
          ) {{ item.name }}
</template>

<script lang="ts">
import Logo from "@/components/Common/Logo.vue";
import BurgerIcon from "@/components/Icon/BurgerIcon.vue";
import CrossIcon from "@/components/Icon/CrossIcon.vue";
import { defineComponent, PropType, computed, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { menuList } from "@/interfaces/IMenu";

export default defineComponent({
  name: "NavMenu",
  components: {
    Logo,
    RouterLink,
    BurgerIcon,
    CrossIcon,
  },
  props: {
    menu: {
      type: Array as PropType<menuList[]>,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute();
    const isMenuOpen = ref<boolean>(false);
    const tabletMenu = props.menu.slice(1);

    const isHomeActive = computed(() => {
      return route.path === "/";
    });

    const isActive = (href: string) => {
      return route.path === href;
    };

    const handleToggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return {
      isHomeActive,
      isActive,
      handleToggleMenu,
      isMenuOpen,
      tabletMenu,
    };
  },
});
</script>
<style lang="sass"></style>
