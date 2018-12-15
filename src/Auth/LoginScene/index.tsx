import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { WithStyles, withStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LoginForm from 'src/Auth/LoginForm';
import styles from './styles';

interface Props extends WithStyles<typeof styles> { }

function Login (props: Props) {

  const { classes } = props;

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <LoginForm />
      </Paper>
    </main>
    );

}

// Enable hot module replacement
export default hot(withStyles(styles)(Login));
