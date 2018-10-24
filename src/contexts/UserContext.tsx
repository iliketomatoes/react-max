import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
/* Import RootStoreState */
import { RootStoreState } from '../modules/index';


/* Import module files */
import * as actions from '../modules/auth/actions';
import { accessTokenSelector } from '../modules/auth/selectors';

interface Props {
  isAuthenticated: boolean;
  error?: Error;
}


interface Actions {
  logOut: () => void;
}

type UserProviderProps = Props & Actions;

const UserContext = React.createContext({});

class UserPure extends React.Component<UserProviderProps> {

  render() {

    const { isAuthenticated, logOut} = this.props;

    return (
      <UserContext.Provider
        value={{
          isAuthenticated: true,
          logOut: logOut,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

/** Populate the Props from the store state. */
const mapStateToProps = (state: RootStoreState): Props => {
  return {
    isAuthenticated: accessTokenSelector(state) !== undefined,
    error: state.auth.error,
  };
};

/** Populate the Actions with the callbacks for the component. */
const mapDispatchToProps = (dispatch: Dispatch): Actions => ({
  logOut: () => {
    dispatch(actions.logoutRequest());
  },
});

const UserProvider = connect(mapStateToProps, mapDispatchToProps)(UserPure);
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserProviderProps };
