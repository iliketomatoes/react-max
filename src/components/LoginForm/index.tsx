import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './styles';

class LoginForm extends React.Component<WithStyles<typeof styles>> {

  state = {
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    errorState: {
      username: false,
      password: false,
    },
    name: '',
    password: ''
  };

  handleChange = (event: React.SyntheticEvent) => {
    let target = event.target as HTMLInputElement;
    this.setState({ name: target.value});
  }

  public render() {
    const { classes } = this.props;
    const { usernameLabel, passwordLabel, name, errorState } = this.state;

    return (
      <form className={classes.root}>
        <FormControl className={classes.formControl} error={errorState.username} fullWidth={true}>
          <InputLabel htmlFor='username'>{usernameLabel}</InputLabel>
          <Input id='username' value={name} onChange={this.handleChange} />
          {errorState.username && <FormHelperText id='component-error-text'>Error</FormHelperText>}
        </FormControl>
        <FormControl className={classes.formControl} error={errorState.password} fullWidth={true}>
          <InputLabel htmlFor='password'>{passwordLabel}</InputLabel>
          <Input id='password' value={name} onChange={this.handleChange} />
          {errorState.password && <FormHelperText id='component-error-text'>Error</FormHelperText>}
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(LoginForm);
