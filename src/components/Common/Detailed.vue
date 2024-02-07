<template lang="pug">
.detailed
  RouterLink.detailed__link(:to="detailed") Подробнее
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Detailed",
  components: {
    RouterLink,
  },
  props: {
    detailed: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>
<style lang="sass"></style>
