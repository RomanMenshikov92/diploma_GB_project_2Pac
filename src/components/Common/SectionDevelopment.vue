<template lang="pug">
section.development
  Title.development__title(:title="dataTitle")
  .development__info
    p.paragraph-reset.paragraph.development__text Страница находится в разработке
    p.paragraph-reset.paragraph.development__text Скоро здесь появится информация
  Back
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Title from "@/components/Common/Title.vue";
import Back from "@/components/Common/Back.vue";
import { TitleItems } from "@/interfaces/ITitle";

export default defineComponent({
  name: "SectionDevelopment",
  components: {
    Title,
    Back,
  },
  props: {
    dataTitle: {
      type: String as () => keyof TitleItems,
      required: true,
    },
  },
  setup() {
    onMounted(() => {
      console.log("onMounted section development");
    });

    return {};
  },
});
</script>
<style lang="sass"></style>
