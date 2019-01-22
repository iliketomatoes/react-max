import { connect } from 'react-redux';
import { Dispatch } from 'redux';

/* Import RootStoreState */
import { RootStoreState } from 'src/rootReducer';

/* Import selectors */
import { getAccessToken } from 'src/Auth/selectors';

/* Import actions */
import { logoutRequest } from 'src/Auth/actions';

/* Import pure component */
import AppContext from './pure';

/**
 * Interface for action callbacks that the container exposes to the component.
 * The component's `this.props` is typed `Props & Actions`.
 */
export interface Actions {
  onLogout: () => void;
}

export interface Props {
  accessToken: Nullable<string>;
}

/** Populate the Props from the store state. */
const mapStateToProps = (state: RootStoreState): Props => {
  return {
    accessToken: getAccessToken(state),
  };
};

/** Populate the Actions with the callbacks for the component. */
const mapDispatchToProps = (dispatch: Dispatch): Actions => ({
  onLogout: () => {
    dispatch(logoutRequest);
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(AppContext);
