<template lang="pug">
.home
  SectionHome.home__main
  SectionBiography.home__biography
  SectionDiscography.home__discography
  SectionVideography.home__videography
  SectionFilmography.home__filmography
  SectionBooks.home__books
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount } from "vue";
import { useHomeVideoStore } from "@/stores/Home/useHomeVideoStore";
import SectionHome from "@/components/Main/Section/Home/SectionHome.vue";
import SectionBiography from "@/components/Main/Section/Biography/SectionBiography.vue";
import SectionDiscography from "@/components/Main/Section/Discography/SectionDiscography.vue";
import SectionVideography from "@/components/Main/Section/Videography/SectionVideography.vue";
import SectionFilmography from "@/components/Main/Section/Filmography/SectionFilmography.vue";
import SectionBooks from "@/components/Main/Section/Books/SectionBooks.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    SectionHome,
    SectionBiography,
    SectionDiscography,
    SectionVideography,
    SectionFilmography,
    SectionBooks,
  },
  setup() {
    // use store
    const homeVideoStore = useHomeVideoStore();

    // reset
    onBeforeUnmount(() => {
      homeVideoStore.reset();
    });

    // return
    return {
      onBeforeUnmount,
    };
  },
});
</script>

<style lang="sass" scoped></style>
