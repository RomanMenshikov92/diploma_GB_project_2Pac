<template lang="pug">
.home__main-blockquote
  blockquote.blockquote-reset.home__main-blockquote-value {{ dataBlockquote.blockquote }}
  time.home__main-blockquote-date {{ dataBlockquote.date }}
</template>
<script lang="ts">
import { BlockquoteItem } from "@/interfaces/IBlockquote";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  name: "HomeBlockquote",
  props: {
    dataBlockquote: {
      type: Object as PropType<BlockquoteItem>,
      required: true,
    },
  },
});
</script>
<style lang="sass"></style>
