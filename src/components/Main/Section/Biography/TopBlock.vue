<template lang="pug">
ul.list-reset.home__biography-first-list
    li(
      v-for="(item, index) in dataFirstBlock"
      :key="index"
      class="home__biography-first-item"
    )
      img(
        class="home__biography-first-img"
        :src="item.img.src"
        :alt="item.img.alt"
      )
      span.home__biography-first-text(v-if="item.text") {{ item.text }}
</template>

<script lang="ts">
import { BiographyFirstBlock } from "@/interfaces/IBiography";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "TopBlock",
  props: {
    dataFirstBlock: {
      type: Array as PropType<BiographyFirstBlock[]>,
      required: true,
    },
  },
});
</script>

<style lang="sass"></style>
