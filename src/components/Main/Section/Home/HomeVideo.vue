<template lang="pug">
.home__main-videocontent
  template(v-if="dataVideo && dataVideoState")
    .home__main-icon
      TVIcon
    video(
      ref="videoElement"
      class="home__main-video"
      :loop="dataVideo.video.loop"
      :autoplay="dataVideo.video.autoplay"
      :muted="dataVideo.video.muted"
      :preload="dataVideo.video.preload"
      :poster="dataVideo.video.poster"
    )
      source(
        :src="dataVideo.source.src"
        :type="dataVideo.source.type"
      )
      track(
        :src="dataVideo.track.src.default"
        :kind="dataVideo.track.kind"
        :label="dataVideo.track.label"
        :srclang="dataVideo.track.srclang"
        :default="dataVideoState.isSubtitle"
      )
    .home__main-controls
      button.btn-reset.home__main-btn(@click="handleIsPlayPause()")
        PlayIcon(v-if="!dataVideoState.isPlaying")
        PauseIcon(v-else)
      button.btn-reset.home__main-btn(@click="handleIsSound()")
        SoundIcon(v-if="dataVideoState.isSound")
        SoundNotIcon(v-else)
      button.btn-reset.home__main-btn(@click="handleIsSubtitle()")
        SubtitleIcon(v-if="dataVideoState.isSubtitle")
        SubtitleNotIcon(v-else)
      button.btn-reset.home__main-btn(@click="handleIsFullscreen()")
        FullscreenIcon
  template(v-else)
    LoaderIcon
</template>
<script lang="ts">
import { VideoControls, VideoItem } from "@/interfaces/IVideo";
import PlayIcon from "@/components/Icon/PlayIcon.vue";
import PauseIcon from "@/components/Icon/PauseIcon.vue";
import SoundIcon from "@/components/Icon/SoundIcon.vue";
import SoundNotIcon from "@/components/Icon/SoundNotIcon.vue";
import SubtitleIcon from "@/components/Icon/SubtitleIcon.vue";
import SubtitleNotIcon from "@/components/Icon/SubtitleNotIcon.vue";
import FullscreenIcon from "@/components/Icon/FullscreenIcon.vue";
import LoaderIcon from "@/components/Icon/LoaderIcon.vue";
import TVIcon from "@/components/Icon/TVIcon.vue";
import { defineComponent, ref, PropType, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "HomeVideo",
  components: {
    PlayIcon,
    PauseIcon,
    SoundIcon,
    SoundNotIcon,
    SubtitleIcon,
    SubtitleNotIcon,
    FullscreenIcon,
    LoaderIcon,
    TVIcon,
  },
  props: {
    dataVideo: {
      type: Object as PropType<VideoItem>,
      required: true,
    },
    dataVideoState: {
      type: Object as PropType<VideoControls>,
      required: true,
    },
    dataIsPlayPause: {
      type: Function as PropType<() => void>,
      required: true,
    },
    dataIsSound: {
      type: Function as PropType<() => void>,
      required: true,
    },
    dataIsSubtitle: {
      type: Function as PropType<() => void>,
      required: true,
    },
    dataIsFullscreen: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  setup(props) {
    const videoElement = ref<HTMLVideoElement | null>(null);

    const screenWidth = ref<number>(window.innerWidth);

    const updateWindowWidth = (): void => {
      screenWidth.value = window.innerWidth;
    };

    const handleIsPlayPause = () => {
      props.dataIsPlayPause();
      props.dataVideoState.isPlaying ? videoElement.value?.play() : videoElement.value?.pause();
    };
    const handleIsSound = () => {
      props.dataIsSound();
      if (videoElement.value !== null) {
        videoElement.value.muted = !props.dataVideoState.isSound;
      }
    };
    const handleIsSubtitle = () => {
      props.dataIsSubtitle();
      if (videoElement.value !== null) {
        const track = videoElement.value.textTracks[0];
        track.mode = props.dataVideoState.isSubtitle ? "showing" : "hidden";
      }
    };
    const handleIsFullscreen = () => {
      props.dataIsFullscreen();
      if (videoElement.value !== null) {
        videoElement.value.requestFullscreen();
      }
    };

    onMounted(() => {
      window.addEventListener("resize", updateWindowWidth);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateWindowWidth);
    });

    return {
      screenWidth,
      videoElement,
      handleIsPlayPause,
      handleIsSound,
      handleIsSubtitle,
      handleIsFullscreen,
    };
  },
});
</script>

<style lang="sass" scoped>
video::cue
  font-size: 20px
  @media(max-width: 1024px)
    font-size: 18px
  @media(max-width: 768px)
    font-size: 16px
  @media(max-width: 480px)
    font-size: 12px
</style>
