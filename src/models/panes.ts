export type VisiblePanes = 1 | 2 | 3;

export interface Article {
  title: string;
}

export interface Pane {
  categories: string[];
  posts: Article[];
}
