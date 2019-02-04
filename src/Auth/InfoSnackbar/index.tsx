import { connect } from 'react-redux';
import { Dispatch } from 'redux';

/* Import RootStoreState */
import { RootStoreState } from 'src/rootReducer';

/* Import module files */
import * as actions from 'src/Auth/actions';

/* Import pure component */
import InfoSnackbar from './pure';

/**
 * Interface for action callbacks that the container exposes to the component.
 * The component's `this.props` is typed `Props & Actions`.
 */
export interface Actions {
  acknowledge: () => void;
}

export interface Props {
  hasAcknowledged: boolean;
}

/** Populate the Props from the store state. */
const mapStateToProps = (state: RootStoreState): Props => {
  return {
    hasAcknowledged: state.auth.ackDemoApp,
  };
};

/** Populate the Actions with the callbacks for the component. */
const mapDispatchToProps = (dispatch: Dispatch): Actions => ({
  acknowledge: () => {
    dispatch(actions.acknowledgeDemoApp(true));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoSnackbar);
