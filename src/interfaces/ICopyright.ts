export interface CopyrightItem {
  pin: string;
  fullname: string;
  year: string;
}

export interface CopyrightStoreState {
  copyrightItem: CopyrightItem;
}
