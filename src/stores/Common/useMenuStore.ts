import { MenuStoreState, menuList } from "@/interfaces/IMenu";
import { defineStore, StoreDefinition } from "pinia";

export const useMenuStore: StoreDefinition<"menu", MenuStoreState> = defineStore("menu", {
  state: (): MenuStoreState => ({
    menuList: [
      {
        name: "",
        href: "/",
      },
      {
        name: "Биография",
        href: "/biography",
      },
      {
        name: "Дискография",
        href: "/discography",
      },
      {
        name: "Видеография",
        href: "/videography",
      },
      {
        name: "Фильмография",
        href: "/filmography",
      },
      {
        name: "Книги",
        href: "/books",
      },
    ],
  }),
  getters: {
    getMenuItems(state: MenuStoreState): menuList[] {
      return state.menuList;
    },
  },
});
