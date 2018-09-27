export type VisiblePanes = 1 | 2 | 3;

export interface PanesStateToProps {
  visiblePanes: VisiblePanes;
}

export interface ApplicationState {
  panes: PanesStateToProps;
}

