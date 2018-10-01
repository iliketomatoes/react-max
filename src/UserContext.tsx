import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState, AuthState } from './reducers';

const UserContext = React.createContext({});

class UserPure extends React.Component<AuthState> {

  render() {
    return (
      <UserContext.Provider
        value={{
          isAuthenticated: this.props.isAuthenticated
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

let mapStateToProps = ({ auth }: ApplicationState): Partial<AuthState> => (
  {
    isAuthenticated: auth.isAuthenticated
  }
);

const UserProvider =  connect(mapStateToProps, {})(UserPure);
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
