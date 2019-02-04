import * as React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { Props, Actions } from './index';

function AuthInfoSnackbar(props: Props & Actions) {

  const open = props.hasAcknowledged;

  const message = `This is a demo app. The sign-in form will let you login with any credentials.`;

  function toggleSnackbar() {
    props.acknowledge();
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={!open}
      autoHideDuration={6000}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id='message-id'>{message}</span>}
      action={[
        <Button key='undo' color='secondary' size='small' onClick={toggleSnackbar}>
          Got it
        </Button>,
      ]}
    />
  );
}

export default AuthInfoSnackbar;
