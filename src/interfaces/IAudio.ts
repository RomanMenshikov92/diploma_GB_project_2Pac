export interface MusicUrl {
  url: string;
  contentType: string;
  id: number;
  name: string;
}

export interface DataTrack {
  id: number;
  title: string;
  featuring: string;
  writer: string;
  producer: string;
  length: string;
}

export interface DataAlbum {
  id: number;
  name: string;
  author: string;
  cover: string;
  year: number;
  tracks: DataTrack[];
}

export interface AudioStoreState {
  musicUrls: MusicUrl[];
  dataListMusic: DataAlbum[];
  albumPath: string;
}
