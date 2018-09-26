import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import * as actions from './actions';
import styles from './styles';
import { LoginFormState, LoginFormProps } from './types';

interface MappedDispatchProps {
  ping: typeof actions.ping;
}

type Props = MappedDispatchProps & LoginFormProps & WithStyles<typeof styles>;

class LoginForm extends React.Component<Props> {

  state: LoginFormState = {
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    errorMessage: '',
    name: '',
    password: ''
  };

  handleChange = (event: React.SyntheticEvent) => {
    let target = event.target as HTMLInputElement;
    this.setState({ name: target.value});
  }

  public render() {
    const { classes, isPinging, ping } = this.props;
    const { usernameLabel, passwordLabel, name, password, errorMessage } = this.state;

    return (
      <form className={classes.root}>
        <FormControl className={classes.formControl} error={!!errorMessage} fullWidth={true}>
          <InputLabel htmlFor='username'>{usernameLabel}</InputLabel>
          <Input id='username' value={name} onChange={this.handleChange} />
          {!!errorMessage && <FormHelperText id='component-error-text'>Error</FormHelperText>}
        </FormControl>
        <FormControl className={classes.formControl} error={!!errorMessage} fullWidth={true}>
          <InputLabel htmlFor='password'>{passwordLabel}</InputLabel>
          <Input id='password' value={password} onChange={this.handleChange} type='password' />
          {!!errorMessage && <FormHelperText id='component-error-text'>Error</FormHelperText>}
        </FormControl>
        <Button variant='contained' size='medium' color='primary' className={classes.button} onClick={ping}>
          Sign In
        </Button>
        <br></br>
        <h2>is pinging?::: {isPinging ? 'yes' : 'no'}</h2>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
