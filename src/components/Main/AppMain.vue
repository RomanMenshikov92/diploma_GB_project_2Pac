<template lang="pug">
main.main
  .container.main__container
    router-view
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppMain",
});
</script>

<style lang="sass"></style>
