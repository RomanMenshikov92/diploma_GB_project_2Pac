<template lang="pug">
.books
  SectionDevelopment(class="books__development" :dataTitle="'titleBooks'")
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import SectionDevelopment from "@/components/Common/SectionDevelopment.vue";
import { useTitleStore } from "@/stores/Common/useTitleStore";

export default defineComponent({
  name: "BooksView",
  components: {
    SectionDevelopment,
  },
  setup() {
    // use store
    const titleStore = useTitleStore();

    // store state
    const titleItem = titleStore.getTitleItems;

    onMounted(() => {
      console.log("onMounted page books");
    });
    return {
      titleItem,
    };
  },
});
</script>

<style lang="sass"></style>
