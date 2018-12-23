import { connect } from 'react-redux';

/* Import RootStoreState */
import { RootStoreState } from 'src/rootReducer';

/* Import state selectors */
import { getAccessToken } from 'src/Auth/selectors';

/* Import pure component */
import router from './pure';

export interface Props {
  isLoggedIn: boolean;
}

/** Populate the Props from the store state. */
const mapStateToProps = (state: RootStoreState): Props => {
  return {
    isLoggedIn: Boolean(getAccessToken(state)),
  };
};

export default connect(mapStateToProps, null)(router);
