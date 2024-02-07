<template lang="pug">
.videography
  SectionDevelopment(class="videography__development" :dataTitle="'titleVideography'")
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import SectionDevelopment from "@/components/Common/SectionDevelopment.vue";
import { useTitleStore } from "@/stores/Common/useTitleStore";

export default defineComponent({
  name: "VideographyView",
  components: {
    SectionDevelopment,
  },
  setup() {
    // use store
    const titleStore = useTitleStore();

    // store state
    const titleItem = titleStore.getTitleItems;

    onMounted(() => {
      console.log("onMounted page videography");
    });
    return {
      titleItem,
    };
  },
});
</script>

<style lang="sass"></style>
