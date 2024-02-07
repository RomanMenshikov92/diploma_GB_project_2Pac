<template lang="pug">
section(ref="section")
  HomeVideo(
  :dataVideo="homeVideoItem"
  :dataVideoState="homeVideoControls"
  :dataIsPlayPause="togglePlayPause"
  :dataIsSound="toggleSound"
  :dataIsSubtitle="toggleSubtitle"
  :dataIsFullscreen="toggleFullscreen"
  )
  HomeBlockquote(:dataBlockquote="homeBlockquoteItem")
  HomeSignature
  Arrows(
  :showLowerArrow="true"
  @scroll-down="scrollDown"
  )
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import HomeVideo from "@/components/Main/Section/Home/HomeVideo.vue";
import HomeBlockquote from "@/components/Main/Section/Home/HomeBlockquote.vue";
import HomeSignature from "@/components/Main/Section/Home/HomeSignature.vue";
import Arrows from "@/components/Common/Arrows.vue";
import { useHomeVideoStore } from "@/stores/Home/useHomeVideoStore";
import { useHomeBlockquoteStore } from "@/stores/Home/useHomeBlockquoteStore";

export default defineComponent({
  name: "SectionHome",
  components: {
    HomeVideo,
    HomeBlockquote,
    Arrows,
    HomeSignature,
  },
  methods: {
    scrollDown() {
      const section = this.$refs.section as HTMLElement;
      section.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
    },
  },
  setup() {
    // use store
    const homeBlockquoteStore = useHomeBlockquoteStore();
    const homeVideoStore = useHomeVideoStore();

    // store state
    const homeBlockquoteItem = homeBlockquoteStore.getHomeBlockquoteItem;
    const homeVideoItem = homeVideoStore.getHomeVideoItem;
    const homeVideoControls = homeVideoStore.getHomeVideoControls;

    // store actions
    const togglePlayPause = homeVideoStore.togglePlayPause;
    const toggleSound = homeVideoStore.toggleSound;
    const toggleSubtitle = homeVideoStore.toggleSubtitle;
    const toggleFullscreen = homeVideoStore.toggleFullscreen;

    onMounted(() => {
      console.log("onMounted section home");
    });

    return {
      homeBlockquoteItem,
      homeVideoItem,
      homeVideoControls,
      togglePlayPause,
      toggleSound,
      toggleSubtitle,
      toggleFullscreen,
    };
  },
});
</script>
<style lang="sass"></style>
