import { connect } from 'react-redux';
import LoginForm, { LoginFormDispatchToProps }  from './pure';
import { auth } from '../../actions';

let mapDispatchToProps: LoginFormDispatchToProps = {
  registerLogIn: auth.logIn,
};

export default connect(null, mapDispatchToProps)(LoginForm);
