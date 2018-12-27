import { connect } from 'react-redux';

/* Import RootStoreState */
import { RootStoreState } from 'src/rootReducer';

/* Import selectors */
import { getAccessToken } from 'src/Auth/selectors';

/* Import pure component */
import AppContext from './pure';


export interface Props {
  accessToken: Nullable<string>;
}

/** Populate the Props from the store state. */
const mapStateToProps = (state: RootStoreState): Props => {
  return {
    accessToken: getAccessToken(state),
  };
};


export default connect(mapStateToProps, null)(AppContext);
