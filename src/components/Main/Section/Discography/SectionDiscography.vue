<template lang="pug">
section(ref="section")
  Title(:title="'titleDiscography'").home__discography-title
  .home__discography-wrapper
    MusicInfoBlock(:dataMusicInfo="discographyInfoItems")
    MusicPlayer(:dataMusicList="musicUrls" :dataMusic="dataListMusic")
  Detailed(:detailed="'/discography'")
  Arrows(
    :showUpperArrow="true"
    :showLowerArrow="true"
    @scroll-up="scrollUp"
    @scroll-down="scrollDown"
    )
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import Arrows from "@/components/Common/Arrows.vue";
import Title from "@/components/Common/Title.vue";
import Detailed from "@/components/Common/Detailed.vue";
import MusicInfoBlock from "@/components/Main/Section/Discography/MusicInfoBlock.vue";
import MusicPlayer from "@/components/Main/Section/Discography/MusicPlayer.vue";
import { useDiscographyAudioStore } from "@/stores/Discography/useDiscographyAudioStore";
import { useDiscographyInfoStore } from "@/stores/Discography/useDiscographyInfoStore";
import { useTitleStore } from "@/stores/Common/useTitleStore";
import { useMenuStore } from "@/stores/Common/useMenuStore";

export default defineComponent({
  name: "SectionDiscography",
  components: {
    Title,
    Arrows,
    Detailed,
    MusicInfoBlock,
    MusicPlayer,
  },
  methods: {
    scrollUp() {
      const section = this.$refs.section as HTMLElement;
      section.previousElementSibling?.scrollIntoView({ behavior: "smooth" });
    },
    scrollDown() {
      const section = this.$refs.section as HTMLElement;
      section.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
    },
  },
  setup() {
    // use store
    const titleStore = useTitleStore();
    const discographyInfoStore = useDiscographyInfoStore();
    const discographyAudioStore = useDiscographyAudioStore();
    const detailedStore = useMenuStore();
    const detailedList = computed(() => detailedStore.getMenuItems);

    // store state
    const titleItem = titleStore.getTitleItems;
    const discographyInfoItems = discographyInfoStore.getDiscographyInfoItems;
    const getDiscographyListItems = computed(() => discographyAudioStore.getDiscographyListItems);
    const dataListMusic = computed(() => discographyAudioStore.getDiscographyInfoListItems);

    // store actions
    const fetchMusicUrls = discographyAudioStore.fetchMusicUrls;

    const loadMusic = discographyAudioStore.loadMusicUrlsFromState;

    const musicUrls = ref(discographyAudioStore.musicUrls);

    onMounted(async () => {
      try {
        console.log("onMounted section discography");
        await discographyAudioStore.loadDiscographyData();
        await fetchMusicUrls();
        loadMusic();
        musicUrls.value = discographyAudioStore.musicUrls;
      } catch (error) {
        console.error(error);
      }
    });

    return {
      titleItem,
      discographyInfoItems,
      fetchMusicUrls,
      loadMusic,
      getDiscographyListItems,
      dataListMusic,
      detailedList,
      musicUrls,
    };
  },
});
</script>
<style lang="sass" scoped></style>
