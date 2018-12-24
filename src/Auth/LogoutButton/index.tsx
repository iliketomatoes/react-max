import { connect } from 'react-redux';
import { Dispatch } from 'redux';

/* Import module files */
import * as actions from 'src/Auth/actions';

/* Import pure component */
import LogoutButton from './pure';


/**
 * Interface for action callbacks that the container exposes to the component.
 * The component's `this.props` is typed `Props & Actions`.
 */
export interface Actions {
  onLogout: () => void;
}

/** Populate the Actions with the callbacks for the component. */
const mapDispatchToProps = (dispatch: Dispatch): Actions => ({
  onLogout: () => {
    dispatch(actions.logoutRequest());
  },
});

export default connect(null, mapDispatchToProps)(LogoutButton);
