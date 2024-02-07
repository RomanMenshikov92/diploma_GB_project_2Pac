<template lang="pug">
.page(:class="{'page-404': is404Page}")
  AppHeader
  AppMain
  AppFooter
</template>

<script lang="ts">
import store from "@/stores/store";
import AppHeader from "@/components/Header/AppHeader.vue";
import AppMain from "@/components/Main/AppMain.vue";
import AppFooter from "@/components/Footer/AppFooter.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  setup() {
    const route = useRoute();

    const is404Page = computed(() => {
      if (route.name === null || route.name === undefined) {
        return false;
      }
      return route.name === "not-found";
    });

    return { is404Page };
  },
  store,
};
</script>

<style lang="sass">
@import "@/assets/sass/style.css"
</style>
