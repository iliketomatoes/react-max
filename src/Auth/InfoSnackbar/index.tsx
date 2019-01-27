import * as React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

function AuthInfoSnackbar() {
  // Check if the user is already acknowledged on
  // the fact that this app is a demo
  const [demoAppAck] = React.useState(sessionStorage.getItem('demoAppAck'));
  const [open, setOpen] = React.useState(true);
  const message = `This is a demo app. The sign-in form will let you login with any credentials.`;

  function toggleSnackbar() {
    if (open) {
      setOpen(false);

      // Store the user acknowledgement in the session storage, so we don't show it again
      sessionStorage.setItem('demoAppAck', 'true');
    } else {
      setOpen(true);
    }
  }

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={open && demoAppAck === null}
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
