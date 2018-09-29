import { connect } from 'react-redux';
import Navigation, { NavMapDispatchToProps }  from './pure';
import { auth } from '../../actions';

let mapDispatchToProps: NavMapDispatchToProps = {
  logOut: auth.logOut,
};

export default connect(null, mapDispatchToProps)(Navigation);
