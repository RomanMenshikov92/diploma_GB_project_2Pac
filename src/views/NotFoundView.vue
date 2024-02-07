<template lang="pug">
.not-found
  .not-found__text
    h2.title.title-reset.not-found__title
      NotFoundIcon
    p.paragraph.paragraph-reset.not-found__paragraph Запрашиваемая страница не найдена
    RouterLink.not-found__link(to="/") На главную
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import NotFoundIcon from "@/components/Icon/NotFoundIcon.vue";

export default defineComponent({
  name: "NotFoundView",
  components: {
    RouterLink,
    NotFoundIcon,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="sass" scoped></style>
