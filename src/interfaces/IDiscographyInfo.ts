export interface Text {
  startText: string;
  number?: number;
  endText?: string;
}

export interface Img {
  src: string;
  alt: string;
}

export interface DiscographyInfoItem {
  firstText: Text;
  secondText: Text;
  img: Img;
}

export interface DiscographyInfoStoreState {
  discographyInfoItems: DiscographyInfoItem;
}
