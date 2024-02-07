<template lang="pug">
.home__biography-second-wrapper
  .home__biography-second-text {{ dataSecondBlock.text }}
  ul.list-reset.home__biography-second-list
      li(
        class="home__biography-second-item"
        v-for="(item, index) in dataSecondBlock.img"
        :key="index"
      )
          img(
            class="home__biography-second-img"
            :src="item.src"
            :alt="item.alt"
          )
      li.home__biography-second-item ...
</template>

<script lang="ts">
import { BiographySecondBlock } from "@/interfaces/IBiography";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "MiddleBlock",
  props: {
    dataSecondBlock: {
      type: Object as PropType<BiographySecondBlock>,
      required: true,
    },
  },
});
</script>

<style lang="sass"></style>
