export type VisiblePanesCount = 1 | 2 | 3;

export const enum PaneGridActionTypes {
  TOGGLE_VIEW = '@@pane/TOGGLE_VIEW'
}

export interface PaneGridState {
  readonly visiblePanes: VisiblePanesCount;
}
