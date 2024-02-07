export interface BookImage {
  src: string;
  alt: string;
}

export interface BooksList {
  id: number;
  img: BookImage;
  description: string;
  link: string;
}

export interface BooksStoreState {
  booksList: BooksList[];
}
