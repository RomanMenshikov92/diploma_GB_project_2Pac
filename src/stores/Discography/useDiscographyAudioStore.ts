import { storage } from "@/data/firebase/config";
import { AudioStoreState, MusicUrl, DataAlbum } from "@/interfaces/IAudio";
import { defineStore, StoreDefinition } from "pinia";
import { listAll, getDownloadURL, getMetadata, ref as storageRef } from "firebase/storage";

export const useDiscographyAudioStore: StoreDefinition<
  "discographyAudio",
  AudioStoreState,
  {
    getDiscographyListItems(state: AudioStoreState): MusicUrl[];
    getDiscographyInfoListItems(state: AudioStoreState): DataAlbum[];
  },
  {
    fetchMusicUrls(): Promise<void>;
    loadDiscographyData(): Promise<void>;
    loadMusicUrlsFromState(): Promise<void>;
  }
> = defineStore("discographyAudio", {
  state: (): AudioStoreState => ({
    musicUrls: [],
    dataListMusic: [],
    albumPath: "discography/studio_albums/1. 2Pacalypse Now",
  }),
  getters: {
    getDiscographyListItems(state: AudioStoreState): MusicUrl[] {
      return state.musicUrls;
    },
    getDiscographyInfoListItems(state: AudioStoreState): DataAlbum[] {
      return state.dataListMusic;
    },
  },
  actions: {
    async fetchMusicUrls(): Promise<void> {
      const albumRef = storageRef(storage, this.albumPath);
      try {
        const { items } = await listAll(albumRef);
        const urls = await Promise.all(items.map(async (item) => await getDownloadURL(item)));
        const metadataPromises = urls.map(async (url, index) => {
          const audioRef = storageRef(storage, url);
          const metadata = await getMetadata(audioRef);
          return {
            id: index + 1,
            url,
            contentType: metadata.contentType || "",
            name: metadata.name,
          };
        });
        this.musicUrls = await Promise.all(metadataPromises);
        this.$state.musicUrls = this.musicUrls;
      } catch (error) {
        console.error(error);
      }
    },
    async loadDiscographyData(): Promise<void> {
      try {
        const response = await fetch("/data/discography.json");
        if (!response.ok) {
          throw new Error("Error when fetching data");
        }
        const data = await response.json();
        this.dataListMusic = data;
      } catch (error) {
        console.error("Failed to load filmography data", error);
      }
    },
    async loadMusicUrlsFromState(): Promise<void> {
      if (this.$state.musicUrls.length > 0) {
        this.musicUrls = this.$state.musicUrls;
      }
    },
  },
});
