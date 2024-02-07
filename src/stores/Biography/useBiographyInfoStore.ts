import {
  BiographyStoreState,
  BiographySecondBlock,
  BiographyThirdBlock,
  BiographyFirstBlock,
} from "@/interfaces/IBiography";
import { defineStore, StoreDefinition } from "pinia";

export const useBiographyInfoStore: StoreDefinition<"infoBiography", BiographyStoreState> =
  defineStore("infoBiography", {
    state: (): BiographyStoreState => ({
      firstBlockList: [
        {
          img: {
            src: require("@/assets/img/biography/first_img_bio.png"),
            alt: "first image 2Pac",
          },
        },
        {
          img: {
            src: require("@/assets/img/biography/second_img_bio.png"),
            alt: "second image 2Pac",
          },
        },
        {
          img: {
            src: require("@/assets/img/biography/third_img_bio.png"),
            alt: "third image 2Pac",
          },
          text: "Хип-хоп-исполнитель, продюсер и актёр",
        },
        {
          img: {
            src: require("@/assets/img/biography/name_signature_bio.png"),
            alt: "fourth image 2Pac",
          },
          text: "поместил Шакура на 86 позицию в списке 100 величайших  исполнителей всех времён.",
        },
      ],
      secondBlockList: {
        img: [
          {
            src: require("@/assets/img/biography/first_avatar_img_bio.png"),
            alt: "first avatar",
          },
          {
            src: require("@/assets/img/biography/second_avatar_img_bio.png"),
            alt: "second avatar",
          },
          {
            src: require("@/assets/img/biography/third_avatar_img_bio.png"),
            alt: "third avatar",
          },
          {
            src: require("@/assets/img/biography/fourth_avatar_img_bio.png"),
            alt: "fourth avatar",
          },
          {
            src: require("@/assets/img/biography/fifth_avatar_img_bio.png"),
            alt: "fifth avatar",
          },
        ],
        text: "Шакур оказал колоссальное влияние на множество  хип-хоп-исполнителей, включая Эминема, Snoop Dogg, Кендрика Ламара, 50 Cent, The Game и многих других",
      },
      thirdBlockList: {
        img: {
          src: require("@/assets/img/biography/bottom_img_bio.png"),
          alt: "image 2Pac",
        },
        text: "Осенью 1996 года Шакур получил несколько огнестрельных ранений. 13 сентября 1996 года, несмотря на попытки врачей остановить внутреннее кровотечение, он скончался. Официальная причина смерти — дыхательная недостаточность и остановка сердца в связи с множеством огнестрельных ранений.",
      },
    }),
    getters: {
      getFirstBlockList(state: BiographyStoreState): BiographyFirstBlock[] {
        return state.firstBlockList;
      },
      getSecondBlockList(state: BiographyStoreState): BiographySecondBlock {
        return state.secondBlockList;
      },
      getThirdBlockList(state: BiographyStoreState): BiographyThirdBlock {
        return state.thirdBlockList;
      },
    },
  });
