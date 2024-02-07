<template lang="pug">
section(ref="section")
  Title(:title="'titleVideography'").home__videography-title
  .home__videography-wrapper
    VideoInfoBlock(:dataVideoInfo="videographyInfoItems")
    VideoList(:dataVideoFrame="videographyFrameItems")
  Detailed(:detailed="'/videography'")
  Arrows(
    :showUpperArrow="true"
    :showLowerArrow="true"
    @scroll-up="scrollUp"
    @scroll-down="scrollDown"
  )
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import Arrows from "@/components/Common/Arrows.vue";
import Title from "@/components/Common/Title.vue";
import Detailed from "@/components/Common/Detailed.vue";
import VideoInfoBlock from "@/components/Main/Section/Videography/VideoInfoBlock.vue";
import VideoList from "@/components/Main/Section/Videography/VideoList.vue";
import { useVideographyInfoStore } from "@/stores/Videography/useVideographyInfoStore";
import { useTitleStore } from "@/stores/Common/useTitleStore";
import { useVideographyFrameStore } from "@/stores/Videography/useVideographyFrameStore";
import { useMenuStore } from "@/stores/Common/useMenuStore";

export default defineComponent({
  name: "SectionVideography",
  components: {
    Title,
    Arrows,
    VideoInfoBlock,
    VideoList,
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
    const videographyInfoStore = useVideographyInfoStore();
    const videographyFrameStore = useVideographyFrameStore();
    const detailedStore = useMenuStore();
    const detailedList = computed(() => detailedStore.getMenuItems);

    // store state
    const titleItem = titleStore.getTitleItems;
    const videographyInfoItems = videographyInfoStore.getVideographyInfoItems;
    const videographyFrameItems = computed(() => videographyFrameStore.getVideographyFrameItem);

    onMounted(async () => {
      console.log("onMounted section videography");
      await videographyFrameStore.loadVideographyData();
    });

    return {
      titleItem,
      videographyInfoItems,
      videographyFrameItems,
      detailedList,
    };
  },
});
</script>
<style lang="sass" scoped></style>
