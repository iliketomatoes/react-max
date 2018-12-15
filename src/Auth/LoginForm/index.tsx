import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './styles';

interface Props extends WithStyles<typeof styles> { }

class LoginForm extends React.Component<Props> {

  render () {
    const { classes } = this.props;

    return (
      <form className={classes.main}>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='email'>Email Address</InputLabel>
          <Input id='email' name='email' autoComplete='email' autoFocus />
        </FormControl>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <Input name='password' type='password' id='password' autoComplete='current-password' />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value='remember' color='primary' />}
          label='Remember me'
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          Sign in
        </Button>
      </form>
    );
  }

}

export default withStyles(styles)(LoginForm);
