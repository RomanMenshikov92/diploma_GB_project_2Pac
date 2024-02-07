<template lang="pug">
.home__videography-info
  .home__videography-info-header
      VideoCameraIcon
      h3.home__videography-info-title {{ dataVideoInfo.title }}
  ul.list-reset.home__videography-info-list
    li(
      class="home__videography-info-item"
      v-for="(text, index) in dataVideoInfo.facts"
      :key="index") {{ text }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Arrows from "@/components/Common/Arrows.vue";
import VideoCameraIcon from "@/components/Icon/VideoCameraIcon.vue";
import { VideographyInfoItem } from "@/interfaces/IVideographyInfo";

export default defineComponent({
  name: "VideoInfoBlock",
  components: {
    Arrows,
    VideoCameraIcon,
  },
  props: {
    dataVideoInfo: {
      type: Object as PropType<VideographyInfoItem>,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped></style>
