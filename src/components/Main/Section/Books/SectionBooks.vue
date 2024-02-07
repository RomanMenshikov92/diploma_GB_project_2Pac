<template lang="pug">
section(ref="section")
  Title(:title="'titleBooks'").home__books-title
  .home__books-wrapper
    BooksList(:booksList="dataBooksList")
  Detailed(:detailed="'/books'")
  Arrows(
    :showUpperArrow="true"
    @scroll-up="scrollUp"
  )
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import Title from "@/components/Common/Title.vue";
import Arrows from "@/components/Common/Arrows.vue";
import Detailed from "@/components/Common/Detailed.vue";
import BooksList from "@/components/Main/Section/Books/BooksList.vue";
import { useTitleStore } from "@/stores/Common/useTitleStore";
import { useBooksListStore } from "@/stores/Books/useBooksListStore";
import { useMenuStore } from "@/stores/Common/useMenuStore";

export default defineComponent({
  name: "SectionBooks",
  components: {
    Title,
    Arrows,
    Detailed,
    BooksList,
  },
  methods: {
    scrollUp() {
      const section = this.$refs.section as HTMLElement;
      section.previousElementSibling?.scrollIntoView({ behavior: "smooth" });
    },
  },
  setup() {
    // use store
    const titleStore = useTitleStore();
    const booksStore = useBooksListStore();
    const detailedStore = useMenuStore();
    const detailedList = computed(() => detailedStore.getMenuItems);

    // store state
    const titleItem = titleStore.getTitleItems;
    const dataBooksList = booksStore.getBooksList;
    onMounted(() => {
      console.log("onMounted section books");
    });

    return {
      titleItem,
      dataBooksList,
      detailedList,
    };
  },
});
</script>

<style lang="sass" scoped></style>
