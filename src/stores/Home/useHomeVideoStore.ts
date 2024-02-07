import { defineStore, StoreDefinition } from "pinia";
import { VideoControls, VideoItem, VideoStoreState } from "@/interfaces/IVideo";

export const useHomeVideoStore: StoreDefinition<
  "homeVideo",
  VideoStoreState,
  {
    getHomeVideoItem(state: VideoStoreState): VideoItem;
    getHomeVideoControls(state: VideoStoreState): VideoControls;
  },
  {
    togglePlayPause(): void;
    toggleSound(): void;
    toggleSubtitle(): void;
    toggleFullscreen(): void;
    reset(): void;
  }
> = defineStore("homeVideo", {
  state: (): VideoStoreState => ({
    homeVideoItem: {
      video: {
        muted: true,
        autoplay: true,
        preload: "auto",
        loop: true,
        poster: require("@/assets/gif/poster-loader.gif"),
      },
      source: {
        src: require("@/assets/video/2Pac-Changes.mp4"),
        type: "video/mp4",
      },
      track: {
        src: require("@/assets/video/2Paс-Changes.vtt"),
        kind: "captions",
        label: "English",
        srclang: "en",
      },
    },
    homeVideoControls: {
      isPlaying: true,
      isSound: false,
      isSubtitle: false,
      isFullscreen: true,
    },
  }),
  getters: {
    getHomeVideoItem(state: VideoStoreState): VideoItem {
      return state.homeVideoItem;
    },
    getHomeVideoControls(state: VideoStoreState): VideoControls {
      return state.homeVideoControls;
    },
  },
  actions: {
    togglePlayPause(): void {
      this.homeVideoControls.isPlaying = !this.homeVideoControls.isPlaying;
    },
    toggleSound(): void {
      this.homeVideoControls.isSound = !this.homeVideoControls.isSound;
    },
    toggleSubtitle(): void {
      this.homeVideoControls.isSubtitle = !this.homeVideoControls.isSubtitle;
    },
    toggleFullscreen(): void {
      this.homeVideoControls.isFullscreen = !this.homeVideoControls.isFullscreen;
    },
    reset(): void {
      this.homeVideoControls.isPlaying = true;
      this.homeVideoControls.isSound = false;
      this.homeVideoControls.isSubtitle = false;
      this.homeVideoControls.isFullscreen = true;
    },
  },
});
