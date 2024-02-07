<template lang="pug">
.discography
  SectionDevelopment(class="discography__development" :dataTitle="'titleDiscography'")
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import SectionDevelopment from "@/components/Common/SectionDevelopment.vue";
import { useTitleStore } from "@/stores/Common/useTitleStore";

export default defineComponent({
  name: "DiscographyView",
  components: {
    SectionDevelopment,
  },
  setup() {
    // use store
    const titleStore = useTitleStore();

    // store state
    const titleItem = titleStore.getTitleItems;

    onMounted(() => {
      console.log("onMounted page discography");
    });
    return {
      titleItem,
    };
  },
});
</script>

<style lang="sass"></style>
