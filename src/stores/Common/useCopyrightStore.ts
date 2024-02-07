import { defineStore, StoreDefinition } from "pinia";
import { CopyrightItem, CopyrightStoreState } from "@/interfaces/ICopyright";

export const useCopyrightStore: StoreDefinition<"copyright", CopyrightStoreState> = defineStore(
  "copyright",
  {
    state: (): CopyrightStoreState => ({
      copyrightItem: { pin: "©", fullname: "Роман Меньшиков", year: "2024" },
    }),
    getters: {
      getCopyrightItem(state: CopyrightStoreState): CopyrightItem {
        return state.copyrightItem;
      },
    },
  }
);
