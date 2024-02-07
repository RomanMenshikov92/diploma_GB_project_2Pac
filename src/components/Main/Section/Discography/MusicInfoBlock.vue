<template lang="pug">
.home__discography-info
  .home__discography-info-first {{ dataMusicInfo.firstText.startText }}
    span.home__discography-info-first-number {{ dataMusicInfo.firstText.number }}
    span.home__discography-info-first {{ dataMusicInfo.firstText.endText }}
  .home__discography-info-second {{ dataMusicInfo.secondText.startText }}
  img(
    class="home__discography-info-img"
    :src="dataMusicInfo.img.src"
    :alt="dataMusicInfo.img.alt"
  )
</template>

<script lang="ts">
import { DiscographyInfoItem } from "@/interfaces/IDiscographyInfo";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "MusicInfoBlock",
  props: {
    dataMusicInfo: {
      type: Object as PropType<DiscographyInfoItem>,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped></style>
