<template lang="pug">
footer.footer
  .container.footer__container
    .footer__logo
      Logo
    .footer__copyright
      Copyright(:copyright="copyrightItem")
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Logo from "@/components/Common/Logo.vue";
import Copyright from "@/components/Footer/Сopyright.vue";
import { useCopyrightStore } from "@/stores/Common/useCopyrightStore";

export default defineComponent({
  name: "AppFooter",
  components: {
    Logo,
    Copyright,
  },
  setup() {
    const copyrightStore = useCopyrightStore();
    const copyrightItem = computed(() => copyrightStore.getCopyrightItem);

    return {
      copyrightItem,
    };
  },
});
</script>

<style lang="sass"></style>
