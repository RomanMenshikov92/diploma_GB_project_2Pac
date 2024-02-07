<template lang="pug">
.home__filmography-info
  p(
    class="paragraph paragraph-reset home__filmography-info-paragraph"
    v-for="(text, index) in dataFilmInfo.text"
    :key="index"
    v-if="dataFilmInfo"
  ) {{ text }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { FilmInfo } from "@/interfaces/IFilmography";

export default defineComponent({
  name: "FilmInfoBlock",
  props: {
    dataFilmInfo: {
      type: Object as PropType<FilmInfo>,
      required: true,
    },
  },
});
</script>
<style lang="sass" scoped></style>
