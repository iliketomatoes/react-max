import * as React from 'react';
import { Props, Actions } from '../containers/Homepage';
import PaneGrid from './PaneGrid';

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

class News extends React.Component<Props & Actions, State> {

  state = INITIAL_STATE;

  public render() {
    return (
      <PaneGrid></PaneGrid>
    );
  }
}

export default News;
