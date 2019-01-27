import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AuthLoginForm from 'src/Auth/LoginForm';
import useStyles from './styles';

function LoginScene () {

  const classes = useStyles({});

  return (
    <div className={classes.scene}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component='h2' variant='h5'>
          Sign in
        </Typography>
        <AuthLoginForm />
      </Paper>
    </div>
    );

}

// Enable hot module replacement
export default hot(LoginScene);
