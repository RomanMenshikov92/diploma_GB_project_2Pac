import { Translate, TitleItems, TitleStoreState } from "@/interfaces/ITitle";
import { defineStore, StoreDefinition } from "pinia";

export const useTitleStore: StoreDefinition<"title", TitleStoreState> = defineStore("title", {
  state: (): TitleStoreState => ({
    titleItems: {
      titleBiography: {
        rus: "Биография",
        eng: "Biography",
      },
      titleDiscography: {
        rus: "Дискография",
        eng: "Discography",
      },
      titleVideography: {
        rus: "Видеография",
        eng: "Videography",
      },
      titleFilmography: {
        rus: "Фильмография",
        eng: "Filmography",
      },
      titleBooks: {
        rus: "Книги",
        eng: "Books",
      },
    },
  }),
  getters: {
    getTitleItems(state: TitleStoreState): TitleItems {
      return state.titleItems;
    },
    getTitleByProp: (state: TitleStoreState) => {
      return (prop: keyof TitleItems): Translate => {
        return state.titleItems[prop];
      };
    },
  },
});
