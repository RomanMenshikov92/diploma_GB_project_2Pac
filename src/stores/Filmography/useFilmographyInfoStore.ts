import { FilmInfo, FilmList, FilmographyStoreState } from "@/interfaces/IFilmography";
import { defineStore, StoreDefinition } from "pinia";

export const useFilmographyInfoStore: StoreDefinition<
  "filmographyInfo",
  FilmographyStoreState,
  {
    getFilmographyInfoItems(state: FilmographyStoreState): FilmInfo;
    getFilmographyListItems(state: FilmographyStoreState): FilmList[];
  },
  {
    loadFilmographyData(): Promise<void>;
  }
> = defineStore("filmographyInfo", {
  state: (): FilmographyStoreState => ({
    filmographyInfoItems: {
      text: [
        "Он занимался не только музыкой, но и был хорошим актером.",
        "В доказательство этому Тупак снялся в нескольких фильмах, в некоторых был в главной роли.",
      ],
    },
    filmographyListItems: [],
  }),
  getters: {
    getFilmographyInfoItems(state: FilmographyStoreState): FilmInfo {
      return state.filmographyInfoItems;
    },
    getFilmographyListItems(state: FilmographyStoreState): FilmList[] {
      return state.filmographyListItems;
    },
  },
  actions: {
    async loadFilmographyData(): Promise<void> {
      try {
        const response = await fetch("/data/filmography.json");
        if (!response.ok) {
          throw new Error("Error when fetching data");
        }
        const data = await response.json();
        this.filmographyListItems = data;
      } catch (error) {
        console.error("Failed to load filmography data", error);
      }
    },
  },
});
