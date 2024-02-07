<template lang="pug">
.home__biography-third-wrapper
  img(
    class="home__biography-third-img"
    :src="dataThirdBlock.img.src"
    :alt="dataThirdBlock.img.alt"
  )
  .home__biography-third-text {{ dataThirdBlock.text }}
</template>

<script lang="ts">
import { BiographyThirdBlock } from "@/interfaces/IBiography";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "BottomBlock",
  props: {
    dataThirdBlock: {
      type: Object as PropType<BiographyThirdBlock>,
      required: true,
    },
  },
});
</script>

<style lang="sass"></style>
