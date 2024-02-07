export interface VideoFrameItem {
  id: number;
  author: string;
  title: string;
  album: string;
  featuring: string;
  year: number;
  directors: string;
  url: string;
  src: string;
}

export interface VideographyFrameStoreState {
  videographyFrameItems: VideoFrameItem[];
}
