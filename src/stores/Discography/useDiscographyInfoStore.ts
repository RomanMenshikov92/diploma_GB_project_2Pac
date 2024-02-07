import { DiscographyInfoStoreState, DiscographyInfoItem } from "@/interfaces/IDiscographyInfo";
import { defineStore, StoreDefinition } from "pinia";

export const useDiscographyInfoStore: StoreDefinition<
  "discographyInfo",
  DiscographyInfoStoreState
> = defineStore("discographyInfo", {
  state: (): DiscographyInfoStoreState => ({
    discographyInfoItems: {
      firstText: {
        startText: "Дискография Тупака насчитывает",
        number: 10,
        endText: "студийных альбомов, пять из которых были изданы после смерти рэпера.",
      },
      secondText: {
        startText:
          "Большинство его песен повествуют о тяжёлой жизни в гетто, насилии, бедности, расизме и проблемах совеменного общества.",
      },
      img: {
        src: require("@/assets/img/discography/img_disc.png"),
        alt: "image 2Pac music disc",
      },
    },
  }),
  getters: {
    getDiscographyInfoItems(state: DiscographyInfoStoreState): DiscographyInfoItem {
      return state.discographyInfoItems;
    },
  },
});
