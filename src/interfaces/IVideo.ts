export interface Video {
  muted: boolean;
  autoplay: boolean;
  preload?: "auto" | "metadata" | "none";
  loop: boolean;
  poster: string;
}

export interface Source {
  src: string;
  type: string;
}

export interface Track {
  kind: string;
  label: string;
  srclang: string;
  src: {
    default?: string;
    [key: string]: string | undefined;
  };
}

export interface VideoControls {
  isPlaying: boolean;
  isSound: boolean;
  isSubtitle: boolean;
  isFullscreen: boolean;
}

export interface VideoItem {
  video: Video;
  source: Source;
  track: Track;
}

export interface VideoStoreState {
  homeVideoItem: VideoItem;
  homeVideoControls: VideoControls;
}
