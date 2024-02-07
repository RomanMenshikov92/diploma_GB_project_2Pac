<template lang="pug">
.filmography
  SectionDevelopment(class="filmography__development" :dataTitle="'titleFilmography'")
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import SectionDevelopment from "@/components/Common/SectionDevelopment.vue";
import { useTitleStore } from "@/stores/Common/useTitleStore";

export default defineComponent({
  name: "FilmographyView",
  components: {
    SectionDevelopment,
  },
  setup() {
    // use store
    const titleStore = useTitleStore();

    // store state
    const titleItem = titleStore.getTitleItems;

    onMounted(() => {
      console.log("onMounted page filmography");
    });
    return {
      titleItem,
    };
  },
});
</script>

<style lang="sass"></style>
