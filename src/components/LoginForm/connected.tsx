import { connect } from 'react-redux';
import LoginForm from './pure';
import * as actions from './actions';
import { LoginFormProps } from './types';
import { ApplicationState } from '../../store';

let mapStateToProps = ({ auth }: ApplicationState): LoginFormProps => (
  {
    isPinging: auth.isPinging,
  }
);

let mapDispatchToProps = {
  ping: actions.ping,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
