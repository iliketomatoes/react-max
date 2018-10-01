import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { WithStyles, withStyles } from '@material-ui/core';
import { withRouter } from 'react-router';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { URLS } from '../../routes';
import { auth } from '../../actions';

export interface LoginFormDispatchToProps {
  registerLogIn: typeof auth.logIn;
}

type allProps = LoginFormDispatchToProps & WithStyles<typeof styles> & RouteComponentProps;

class LoginForm extends React.Component<allProps> {

  state = {
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    errorMessage: '',
    name: '',
    password: '',
  };

  handleChange = (event: React.SyntheticEvent, key: string) => {
    let target = event.target as HTMLInputElement;
    this.setState({ [key]: target.value});
  }

  handleSubmit = () => {
    // TODO
    // AJAX Call for authentication

    this.props.registerLogIn({
      name: this.state.name,
      password: this.state.password
    });

    // Redirect to the homepage
    this.props.history.push(URLS.News);
  }

  public render() {
    const { classes } = this.props;

    const {
      usernameLabel,
      passwordLabel,
      name,
      password,
      errorMessage
    } = this.state;

    const disabledSubmitBtn = name === '' || password === '' ? true : false;

    return (
      <form className={classes.root} noValidate>
        <FormControl className={classes.formControl} error={!!errorMessage} fullWidth={true}>
          <InputLabel htmlFor='username'>{usernameLabel}</InputLabel>
          <Input id='username' value={name} onChange={(e) => this.handleChange(e, 'name')} />
          {!!errorMessage && <FormHelperText id='component-error-text'>Error</FormHelperText>}
        </FormControl>
        <FormControl className={classes.formControl} error={!!errorMessage} fullWidth={true}>
          <InputLabel htmlFor='password'>{passwordLabel}</InputLabel>
          <Input id='password' value={password} onChange={(e) => this.handleChange(e, 'password')} type='password' />
          {!!errorMessage && <FormHelperText id='component-error-text'>Error</FormHelperText>}
        </FormControl>
        <Button variant='contained' size='medium' color='primary' disabled={disabledSubmitBtn} className={classes.button} onClick={this.handleSubmit}>
          Sign In
        </Button>
      </form>
    );
  }
}

const styledComponent = withStyles(styles)(LoginForm);

export default withRouter(styledComponent);
