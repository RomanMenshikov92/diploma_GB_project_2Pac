<template lang="pug">
.biography
  SectionDevelopment(class="biography__development" :dataTitle="'titleBiography'")
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import SectionDevelopment from "@/components/Common/SectionDevelopment.vue";
import { useTitleStore } from "@/stores/Common/useTitleStore";

export default defineComponent({
  name: "BiographyView",
  components: {
    SectionDevelopment,
  },
  setup() {
    // use store
    const titleStore = useTitleStore();

    // store state
    const titleItem = titleStore.getTitleItems;

    onMounted(() => {
      console.log("onMounted page biography");
    });
    return {
      titleItem,
    };
  },
});
</script>

<style lang="sass"></style>
