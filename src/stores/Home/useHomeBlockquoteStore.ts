import { defineStore, StoreDefinition } from "pinia";
import { BlockquoteItem, HomeBlockquoteStoreState } from "@/interfaces/IBlockquote";

export const useHomeBlockquoteStore: StoreDefinition<"homeBlockquote", HomeBlockquoteStoreState> =
  defineStore("homeBlockquote", {
    state: (): HomeBlockquoteStoreState => ({
      homeBlockquoteItem: {
        blockquote: "Life's a wheel of fortune and it's my chance to spin it",
        pin: "©",
        name: "2Pac",
        date: "16.06.1971 - 13.09.1996",
      },
    }),
    getters: {
      getHomeBlockquoteItem(state: HomeBlockquoteStoreState): BlockquoteItem {
        return state.homeBlockquoteItem;
      },
    },
  });
