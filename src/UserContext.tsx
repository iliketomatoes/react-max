import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState, AuthState } from './reducers';
import { auth } from './actions';

interface UserProviderProps extends Pick<AuthState, 'isAuthenticated'> {
  logOut: typeof auth.logOut;
}

const UserContext = React.createContext({});

class UserPure extends React.Component<UserProviderProps> {

  render() {

    const { isAuthenticated, logOut} = this.props;

    return (
      <UserContext.Provider
        value={{
          isAuthenticated: isAuthenticated,
          logOut: logOut,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

let mapStateToProps = ({ auth }: ApplicationState): Pick<AuthState, 'isAuthenticated'> => (
  {
    isAuthenticated: auth.isAuthenticated,
  }
);

let mapDispatchToProps = {
  logOut: auth.logOut
};

const UserProvider = connect(mapStateToProps, mapDispatchToProps)(UserPure);
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer, UserProviderProps };
