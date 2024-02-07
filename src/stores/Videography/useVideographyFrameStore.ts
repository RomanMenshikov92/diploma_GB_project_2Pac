import { defineStore, StoreDefinition } from "pinia";
import type { VideoFrameItem, VideographyFrameStoreState } from "@/interfaces/IFrame";

export const useVideographyFrameStore: StoreDefinition<
  "videographyFrame",
  VideographyFrameStoreState,
  {
    getVideographyFrameItem(state: VideographyFrameStoreState): VideoFrameItem[];
  },
  {
    loadVideographyData(): Promise<void>;
  }
> = defineStore("videographyFrame", {
  state: (): VideographyFrameStoreState => ({
    videographyFrameItems: [],
  }),
  getters: {
    getVideographyFrameItem(state: VideographyFrameStoreState): VideoFrameItem[] {
      return state.videographyFrameItems;
    },
  },
  actions: {
    async loadVideographyData() {
      try {
        const response = await fetch("/data/videography.json");
        if (!response.ok) {
          throw new Error("Error when fetching data");
        }
        const data = await response.json();
        this.videographyFrameItems = data;
      } catch (error) {
        console.error("Failed to load videography data", error);
      }
    },
  },
});
