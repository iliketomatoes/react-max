import * as React from 'react';

/**
 * Interface for private internal component state.
 */
interface State {

}

/**
 * The initial state for our internal component state.
 */
const INITIAL_STATE: State = {

};

class PaneGrid extends React.Component<State> {

  state = INITIAL_STATE;

  public render() {
    return (
      <div>Hi, I'm the grid container</div>
    );
  }
}

export default PaneGrid;
