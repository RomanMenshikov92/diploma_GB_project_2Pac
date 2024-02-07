export interface BlockquoteItem {
  blockquote: string;
  pin: string;
  name: string;
  date: string;
}

export interface HomeBlockquoteStoreState {
  homeBlockquoteItem: BlockquoteItem;
}
