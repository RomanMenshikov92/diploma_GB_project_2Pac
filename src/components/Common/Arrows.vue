<template lang="pug">
.arrows
  button.btn-reset.arrows__btn-up(v-if="showUpperArrow" @click="scrollUp")
    UpperArrowIcon
  button.btn-reset.arrows__btn-down(v-if="showLowerArrow" @click="scrollDown")
    LowerArrowIcon
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UpperArrowIcon from "@/components/Icon/UpperArrowIcon.vue";
import LowerArrowIcon from "@/components/Icon/LowerArrowIcon.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Arrows",
  components: { UpperArrowIcon, LowerArrowIcon },
  props: {
    showUpperArrow: Boolean,
    showLowerArrow: Boolean,
  },
  emits: ["scroll-up", "scroll-down"],
  setup(props, { emit }) {
    const scrollUp = () => {
      emit("scroll-up");
    };

    const scrollDown = () => {
      emit("scroll-down");
    };

    return { scrollUp, scrollDown };
  },
});
</script>
<style lang="sass"></style>
