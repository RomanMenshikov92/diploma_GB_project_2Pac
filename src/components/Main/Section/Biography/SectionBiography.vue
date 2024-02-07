<template lang="pug">
section(ref="section")
  Title.home__biography-title(:title="'titleBiography'")
  .home__biography-wrapper
    TopBlock(
      :dataFirstBlock="firstBlockList"
    )
    MiddleBlock(
      :dataSecondBlock="secondBlockList"
    )
    BottomBlock(
      :dataThirdBlock="thirdBlockList"
    )
  Detailed(:detailed="'/biography'")
  Arrows(
    :showUpperArrow="true"
    :showLowerArrow="true"
    @scroll-up="scrollUp"
    @scroll-down="scrollDown"
  )
</template>

<script lang="ts">
import TopBlock from "@/components/Main/Section/Biography/TopBlock.vue";
import MiddleBlock from "@/components/Main/Section/Biography/MiddleBlock.vue";
import BottomBlock from "@/components/Main/Section/Biography/BottomBlock.vue";
import Detailed from "@/components/Common/Detailed.vue";
import Title from "@/components/Common/Title.vue";
import Arrows from "@/components/Common/Arrows.vue";
import { defineComponent, onMounted } from "vue";
import { useBiographyInfoStore } from "@/stores/Biography/useBiographyInfoStore";
import { useTitleStore } from "@/stores/Common/useTitleStore";

export default defineComponent({
  name: "SectionBiography",
  components: {
    Title,
    Arrows,
    Detailed,
    TopBlock,
    MiddleBlock,
    BottomBlock,
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
    const biographyInfoStore = useBiographyInfoStore();

    // store state
    const titleItem = titleStore.getTitleItems;
    const firstBlockList = biographyInfoStore.getFirstBlockList;
    const secondBlockList = biographyInfoStore.getSecondBlockList;
    const thirdBlockList = biographyInfoStore.getThirdBlockList;

    onMounted(() => {
      console.log("onMounted section biography");
    });

    return {
      titleItem,
      firstBlockList,
      secondBlockList,
      thirdBlockList,
    };
  },
});
</script>
<style lang="sass"></style>
