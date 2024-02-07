export interface FilmInfo {
  text: string[];
}

export interface FilmList {
  id: number;
  img: string;
  title: string;
  year: number;
  description: string;
}

export interface FilmographyStoreState {
  filmographyInfoItems: FilmInfo;
  filmographyListItems: FilmList[];
}
