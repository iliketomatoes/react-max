import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { WithStyles, withStyles } from '@material-ui/core';
import { withRouter } from 'react-router';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { URLS } from '../../routes';
import { auth } from '../../actions';
import { loginApi } from '../../services/api';

export interface LoginFormDispatchToProps {
  registerLogIn: typeof auth.logIn;
}

type allProps = LoginFormDispatchToProps & WithStyles<typeof styles> & RouteComponentProps;

class LoginForm extends React.Component<allProps> {

  state = {
    emailLabel: 'E-mail',
    passwordLabel: 'Password',
    errorMessage: '',
    email: '',
    password: '',
    isLoading: false,
  };

  handleChange = (event: React.SyntheticEvent, key: string) => {
    let target = event.target as HTMLInputElement;
    this.setState({ [key]: target.value});
  }

  handleSubmit = () => {

    const { email, password } = this.state;

    this.setState({ errorMessage: '' });

    const loginRequest = loginApi('/login', {
      email,
      password,
    });

    loginRequest.subscribe({
      next: (isAuthenticated) => {

        if (isAuthenticated) {
          this.props.registerLogIn({
            email
          });

          // Redirect to the homepage
          this.props.history.push(URLS.News);

        } else {
          this.setState({ errorMessage: 'The credentials you submitted are not valid.' });
        }
      },
      error: (err) => {
        this.setState({ errorMessage: 'There was an error in your request' });
      }
    });

  }

  public render() {
    const { classes } = this.props;

    const {
      emailLabel,
      passwordLabel,
      email,
      password,
      errorMessage
    } = this.state;

    const disabledSubmitBtn = email === '' || password === '' ? true : false;

    return (
      <form className={classes.root} noValidate>
        <FormControl className={classes.formControl} error={!!errorMessage} fullWidth={true}>
          <InputLabel htmlFor='email'>{emailLabel}</InputLabel>
          <Input id='email' value={email} onChange={(e) => this.handleChange(e, 'email')} />
        </FormControl>
        <FormControl className={classes.formControl} error={!!errorMessage} fullWidth={true}>
          <InputLabel htmlFor='password'>{passwordLabel}</InputLabel>
          <Input id='password' value={password} onChange={(e) => this.handleChange(e, 'password')} type='password' />
        </FormControl>
        <Button variant='contained' size='medium' color='primary' disabled={disabledSubmitBtn} className={classes.button} onClick={this.handleSubmit}>
          Sign In
        </Button>
        <div className={classes.errorMsg}>
          <Typography color='error'>{errorMessage}</Typography>
        </div>
      </form>
    );
  }
}

const styledComponent = withStyles(styles)(LoginForm);

export default withRouter(styledComponent);
