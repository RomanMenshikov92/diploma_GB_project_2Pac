<template lang="pug">
section(ref="section")
  Title(:title="'titleFilmography'").home__filmography-title
  .home__filmography-wrapper
    FilmInfoBlock(:dataFilmInfo="filmographyInfoItems")
    FilmList(:dataFilmList="filmographyListItems")
  Detailed(:detailed="'/filmography'")
  Arrows(
    :showUpperArrow="true"
    :showLowerArrow="true"
    @scroll-up="scrollUp"
    @scroll-down="scrollDown"
  )
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import Title from "@/components/Common/Title.vue";
import Arrows from "@/components/Common/Arrows.vue";
import FilmInfoBlock from "@/components/Main/Section/Filmography/FilmInfoBlock.vue";
import FilmList from "@/components/Main/Section/Filmography/FilmList.vue";
import Detailed from "@/components/Common/Detailed.vue";
import { useFilmographyInfoStore } from "@/stores/Filmography/useFilmographyInfoStore";
import { useTitleStore } from "@/stores/Common/useTitleStore";
import { useMenuStore } from "@/stores/Common/useMenuStore";

export default defineComponent({
  name: "SectionFilmography",
  components: {
    Title,
    Arrows,
    FilmInfoBlock,
    FilmList,
    Detailed,
  },
  methods: {
    scrollUp() {
      const section = this.$refs.section as HTMLElement;
      section.previousElementSibling?.scrollIntoView({ behavior: "smooth" });
    },
    scrollDown() {
      const section = this.$refs.section as HTMLElement;
      section.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
    },
  },
  setup() {
    // use store
    const titleStore = useTitleStore();
    const filmographyInfoStore = useFilmographyInfoStore();
    const detailedStore = useMenuStore();
    const detailedList = computed(() => detailedStore.getMenuItems);

    // use state
    const titleItem = titleStore.getTitleItems;
    const filmographyInfoItems = filmographyInfoStore.getFilmographyInfoItems;
    const filmographyListItems = computed(() => filmographyInfoStore.getFilmographyListItems);

    onMounted(async () => {
      console.log("onMounted section filmography");
      await filmographyInfoStore.loadFilmographyData();
    });

    return {
      titleItem,
      filmographyInfoItems,
      filmographyListItems,
      detailedList,
    };
  },
});
</script>

<style lang="sass" scoped></style>
