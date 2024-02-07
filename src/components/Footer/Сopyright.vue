<template lang="pug">
span.footer__copyright-pin {{ copyright.pin }}
span.footer__copyright-fullname {{ copyright.fullname }},
span.footer__copyright-year {{ copyright.year }}
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CopyrightItem } from "@/interfaces/ICopyright";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Copyright",
  props: {
    copyright: {
      type: Object as PropType<CopyrightItem>,
      required: true,
    },
  },
});
</script>

<style lang="sass"></style>
