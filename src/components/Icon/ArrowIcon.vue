<template lang="pug">
<svg :style="{ transform: 'rotate(' + rotate + 'deg)' }" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.5087 1.89036L44.5138 17.1763L77.4083 44.4178C80.5086 45.8165 84.1081 47.4897 77.4083 53.8684L51.8327 72.9804L33.5087 96.3958C29.156 102.999 26.4471 99.0055 23.7532 96.3958C21.0593 93.7861 22.3827 92.5184 25.0766 89.9087L30.8358 81.6414L55.877 55.8256L61.2596 49.1C61.2596 49.1 60.5211 48.6 60.5211 47.3C60.5211 46 59.164 44.4178 59.164 44.4178L56.872 41.2892L19.9173 7.03913C17.2234 4.42943 21.0593 4.50005 23.7532 1.89036C26.4471 -0.719336 27.5962 -0.539295 33.5087 1.89036Z" fill="white"/>
</svg>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowIcon",
  props: {
    rotate: {
      type: Number,
      default: 0,
    },
  },
});
</script>
<style lang="sass">
svg
  width: 50px
  height: 50px
</style>
