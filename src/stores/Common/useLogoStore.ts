import { LogoStoreState, LogoItem } from "@/interfaces/ILogo";
import { defineStore, StoreDefinition } from "pinia";

export const useLogoStore: StoreDefinition<"logo", LogoStoreState> = defineStore("logo", {
  state: (): LogoStoreState => ({
    logoItem: {
      src: require("@/assets/img/logo_2Pac.svg"),
      alt: "Logo 2Pac",
    },
  }),
  getters: {
    getLogoItem(state: LogoStoreState): LogoItem {
      return state.logoItem;
    },
  },
});
