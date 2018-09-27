import { connect } from 'react-redux';
import LoginForm, { LoginFormDispatchToProps }  from './pure';
import { ping } from '../../actions';
import { ApplicationState, AuthState } from '../../reducers';

let mapStateToProps = ({ auth }: ApplicationState): AuthState => (
  {
    isPinging: auth.isPinging,
    isUserAuthenticated: auth.isPinging
  }
);

let mapDispatchToProps: LoginFormDispatchToProps = {
  ping: ping,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
