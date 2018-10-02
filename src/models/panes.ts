import { Article } from './article';

export type VisiblePanes = 1 | 2 | 3;

export interface Pane {
  entity: string;
  categories: string[];
  articles: Article[];
}
