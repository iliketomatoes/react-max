import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Actions } from './index';

function LogoutButton(props: Actions) {
  return <Button color='inherit' onClick={props.onLogout}>Logout</Button>;
}

export default LogoutButton;
