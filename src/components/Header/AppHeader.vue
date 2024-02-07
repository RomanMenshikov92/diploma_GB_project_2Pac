<template lang="pug">
header.header
  .container.header__container
    NavMenu(:menu="menuList")
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import NavMenu from "@/components/Header/NavMenu.vue";
import { useMenuStore } from "@/stores/Common/useMenuStore";

export default defineComponent({
  name: "AppHeader",
  components: {
    NavMenu,
  },
  setup() {
    const menuStore = useMenuStore();
    const menuList = computed(() => menuStore.getMenuItems);

    return {
      menuList,
    };
  },
});
</script>

<style lang="sass"></style>
