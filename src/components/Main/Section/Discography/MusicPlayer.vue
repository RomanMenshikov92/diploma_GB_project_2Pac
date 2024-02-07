<template lang="pug">
.home__discography-music
  template(v-if="dataMusic.length > 0 && dataMusicList.length > 0 && dataMusic && dataMusicList")
    .home__discography-music-header(v-if="dataMusic && dataMusic.length > 0")
        img(
          class="home__discography-music-header-img"
          :src="dataMusic[0].cover"
          :alt="dataMusic[0].name"
        )
        .home__discography-music-header-name-year {{ dataMusic[0].name }} ({{ dataMusic[0].year }})
    ul.list-reset.home__discography-music-list(
      v-if="dataMusicList && dataMusicList.length > 0"
      :class="{ 'home__discography-music-list--expanded': isListExpanded }"
    )
      li(
        class="home__discography-music-item"
        v-for="(url, index) in dataMusicList" :key="index"
      )
        button(
          class="btn-reset home__discography-music-btn-name"
          :class="{ 'home__discography-music-btn-name--active': isAudioPlaying(index) }"
          @click="handlePlayPauseAudio(index)"
        )
          PlayIcon(v-if="!isAudioPlaying(index)")
          PauseIcon(v-else)
        audio(
          ref="audioPlayers"
          class="home__discography-music-audio"
          :id="url.id.toString()"
        )
          source(:src="url.url" :type="url.contentType")
        span(
          class="home__discography-music-btn-name-span"
          :class="{ 'home__discography-music-btn-name-span--active': isAudioPlaying(index) }"
        ) {{ url.name.slice(0, -4) }}
      button(
        class="btn-reset home__discography-music-arrow-btn"
        :class="{'home__discography-music-arrow-btn--active' : isListExpanded}"
        @click="toggleExpandList"
      )
        ArrowIcon(:rotate="isListExpanded ? -90 : 90")
  template(v-else)
    LoaderIcon
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from "vue";
import PlayIcon from "@/components/Icon/PlayIcon.vue";
import PauseIcon from "@/components/Icon/PauseIcon.vue";
import LoaderIcon from "@/components/Icon/LoaderIcon.vue";
import { DataAlbum, MusicUrl } from "@/interfaces/IAudio";
import ArrowIcon from "@/components/Icon/ArrowIcon.vue";

export default defineComponent({
  name: "MusicPlayer",
  components: {
    PlayIcon,
    PauseIcon,
    ArrowIcon,
    LoaderIcon,
  },
  props: {
    dataMusicList: {
      type: Array as PropType<MusicUrl[]>,
      required: true,
    },
    dataMusic: {
      type: Array as PropType<DataAlbum[]>,
      required: true,
    },
  },
  setup(props) {
    const audioPlayers = ref<Array<HTMLAudioElement | null>>([]);
    const isPlaying = ref([] as boolean[]);
    const isListExpanded = ref(false);

    const toggleExpandList = () => {
      isListExpanded.value = !isListExpanded.value;
    };

    const handlePlayPauseAudio = (index: number) => {
      const audioPlayer = audioPlayers.value[index];
      if (audioPlayer) {
        audioPlayers.value.forEach((player, i) => {
          if (i !== index && player) {
            player.pause();
            player.currentTime = 0;
            isPlaying.value[i] = false;
          }
        });

        if (audioPlayer.paused) {
          audioPlayer.play();
          isPlaying.value[index] = true;
        } else {
          audioPlayer.pause();
          isPlaying.value[index] = false;
        }
      }
    };

    const isAudioPlaying = (index: number) => {
      return isPlaying.value[index];
    };

    onMounted(async () => {
      await Promise.all(
        props.dataMusicList.map((url, index) => {
          return new Promise<void>((resolve) => {
            const audioElement = new Audio();
            audioElement.addEventListener("canplaythrough", () => {
              audioPlayers.value[index] = audioElement;
              resolve();
            });
            audioElement.src = url.url;
          });
        })
      );
    });

    return {
      audioPlayers,
      handlePlayPauseAudio,
      isAudioPlaying,
      toggleExpandList,
      isListExpanded,
    };
  },
});
</script>

<style lang="sass" scoped></style>
