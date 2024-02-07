import { BooksList, BooksStoreState } from "@/interfaces/IBooks";
import { defineStore, StoreDefinition } from "pinia";

export const useBooksListStore: StoreDefinition<"books", BooksStoreState> = defineStore("books", {
  state: (): BooksStoreState => ({
    booksList: [
      {
        id: 1,
        img: {
          src: require("@/assets/img/books/book_tupac-remembered.png"),
          alt: "Книга «Tupac Remembered»",
        },
        description:
          "Над составлением книги работали тетя Тупака «Gloria Cox», приятельница «Molly Monjauze» и автор «Staci Robinson». Кроме вышеупомянутых личностей, воспоминаниями о Тупаке поделились The Outlawz, Talib Kweli, E-40, Treach и поэт Maya Angelou.",
        link: "https://vk.com/wall-10615903_29999",
      },
      {
        id: 2,
        img: {
          src: require("@/assets/img/books/book_tupac-shakur.png"),
          alt: "Книга «Tupac Shakur»",
        },
        description:
          "Книга имеет интересную структуру. Авторы рассказывают нам о судьбах самых дальних родственников Тупака с 18ого века и вплоть до века 20ого. Параллельно авторы исследуют историю самих США.",
        link: "https://knigogid.ru/books/1816674-tupac-shakur-the-life-and-times-of-an-american-icon",
      },
      {
        id: 3,
        img: {
          src: require("@/assets/img/books/book_tupac-i-am-alone-against-the-world.png"),
          alt: "Книга «Тупак Шакур - я один против целого мира»",
        },
        description:
          "За 25 лет своей жизни он сумел стать легендой. Детство в Гарлеме, юность в знаменитой банде 'Черные пантеры', фатально жестокие и провокационные тексты, которые он читал не просто убили его, они спровоцировали самую знаменитую в истории хип-хопа войну: западного и восточного побережья. Алкоголь, наркотики, драки, изнасилования и очень большие деньги, - из всего этого состояла его жизнь, но было еще что-то, что-то такое, что позволило черному подростку из Гарлема стать самым продаваемым и самым успешным рэпером в истории, легендой и символом борьбы за свободу и успех.",
        link: "https://www.labirint.ru/books/706001/",
      },
    ],
  }),
  getters: {
    getBooksList(state: BooksStoreState): BooksList[] {
      return state.booksList;
    },
  },
});
