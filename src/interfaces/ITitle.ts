export interface Translate {
  rus: string;
  eng: string;
}

export interface TitleItems {
  titleBiography: Translate;
  titleDiscography: Translate;
  titleVideography: Translate;
  titleFilmography: Translate;
  titleBooks: Translate;
}

export interface TitleStoreState {
  titleItems: TitleItems;
}
