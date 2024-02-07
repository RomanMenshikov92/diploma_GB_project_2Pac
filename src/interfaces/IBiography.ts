export interface BiographyImage {
  src: string;
  alt: string;
}

export interface BiographyFirstBlock {
  img: BiographyImage;
  text?: string;
}

export interface BiographySecondBlock {
  img: BiographyImage[];
  text: string;
}

export interface BiographyThirdBlock {
  img: BiographyImage;
  text: string;
}

export interface BiographyStoreState {
  firstBlockList: BiographyFirstBlock[];
  secondBlockList: BiographySecondBlock;
  thirdBlockList: BiographyThirdBlock;
}
