import { VideographyInfoStoreState, VideographyInfoItem } from "@/interfaces/IVideographyInfo";
import { defineStore, StoreDefinition } from "pinia";

export const useVideographyInfoStore: StoreDefinition<
  "videographyInfo",
  VideographyInfoStoreState
> = defineStore("videographyInfo", {
  state: (): VideographyInfoStoreState => ({
    videographyInfoItems: {
      title: "Интересные факты про некоторые клипы:",
      facts: [
        "“California Love” снята по теме фильма «Безумный Макс 3: Под куполом грома», главного злодея играет Джордж Клинтон, вместе с комиком Крисом Такером. Этот видеоклип был номинирован на многие награды, и попал в список «100 Greatest Videos Ever Made» по версии телеканала «MTV».",
        "«Changes» — посмертная песня Тупака Шакура, выпущенная как сингл 13 октября 1998. Оригинальная версия была записана Тупаком в 1992 году, но официально нигде не выпускалась. В 1999 году был выпущен видеоклип, состоящий из нарезок редких фотографий и выступлений Тупака.",
        "«Temptations» — клип, в котором приняли участие рэп-артисты  Ice-T, Coolio, Warren G, Jada Pinkett Smith и другие, хотя самого Тупака в клипе не было, так как он отбывал тюремный срок.",
        "Видеоклип “Brenda’s Got a Baby” был снят в чёрно-белом цвете, чтобы показать всю мрачность того времени в гетто и основан на реальных событиях.",
      ],
    },
  }),
  getters: {
    getVideographyInfoItems(state: VideographyInfoStoreState): VideographyInfoItem {
      return state.videographyInfoItems;
    },
  },
});
