<template lang="pug">
.back
  RouterLink.back__link(to="" @click="goBack") Назад
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, useRouter } from "vue-router";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Back",
  components: {
    RouterLink,
  },
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.go(-1);
    };

    return {
      goBack,
    };
  },
});
</script>
<style lang="sass" scoped>
.btn__back
  align-self: flex-end
  padding: 10px
  color: white
  border: 1px solid white
</style>
