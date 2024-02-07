<template lang="pug">
h2.title-reset.title {{ header.rus }}
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useTitleStore } from "@/stores/Common/useTitleStore";
import { TitleItems } from "@/interfaces/ITitle";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Title",
  props: {
    title: {
      type: String as () => keyof TitleItems,
      required: true,
    },
  },
  setup(props) {
    const titleStore = useTitleStore();
    const header = computed(() => {
      return titleStore.getTitleByProp(props.title);
    });

    return { header };
  },
});
</script>
<style lang="sass"></style>
@/stores/Common/useTitleStore
