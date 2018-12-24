import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { WithStyles, withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { URLS } from 'src/rootRoutes';
import { Props, Actions } from './index';
import styles from './styles';

interface State {
  isFormFilled: boolean;
  isError: boolean;
  email: string;
  password: string;
}

type CompositeProps = Props & Actions & WithStyles<typeof styles>;

class LoginForm extends React.PureComponent<CompositeProps, State> {

  state: State = {
    isFormFilled: false,
    isError: false,
    email: '',
    password: '',
  };

  checkboxRef: React.RefObject<any>;

  constructor(props: CompositeProps) {
    super(props);

    this.checkboxRef = React.createRef();
  }

  componentDidUpdate() {

    // Enable the submit button when both fields are filled in,
    // otherwise disable it.
    this.toggleSubmitButton();
  }

  // Enable/disable submit button
  toggleSubmitButton() {
    const { password, email, isFormFilled } = this.state;

    if ((email === '' || password === '') && isFormFilled) {

      // Disable the submit button
      this.setState({
        isFormFilled: false,
      });

    } else {

      if ((email !== '' && this.state.password !== '') && !isFormFilled) {

        // Enable the submit button
        this.setState({
          isFormFilled: true,
        });
      }

    }
  }

  // Handle form inputs change
  handleChange = (
    name: keyof Pick<State, 'email' | 'password'>,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      this.setState({
        [name]: e.target.value,
      } as Pick<State, 'email' | 'password'>);
    }

  // Handle form submit
  doLogin = (event: React.FormEvent) => {
    event.preventDefault();
    const { password, email } = this.state;

    this.props.onLogin(email, password);
  }

  render() {

    const { classes, isLoggedIn } = this.props;
    const { isError, isFormFilled } = this.state;

    // Redirect to the homepage if user is isLoggedIn
    if (isLoggedIn) {
      return <Redirect to={URLS.Homepage} />;
    }

    return (
      <form className={classes.main} onSubmit={this.doLogin}>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='email'>Email Address</InputLabel>
          <Input id='email' name='email'
              autoComplete='email' autoFocus
              onChange={(e) => this.handleChange('email', e)} />
        </FormControl>
        <FormControl margin='normal' required fullWidth>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <Input name='password' type='password'
              id='password' autoComplete='current-password'
              onChange={(e) => this.handleChange('password', e)} />
        </FormControl>
        <FormControlLabel
          inputRef={this.checkboxRef}
          control={<Checkbox color='primary' value='remember me' defaultChecked={true}/>}
          label='Remember me'
        />
        {
          isError &&
          <div className={classes.errorMsg}>
            <Icon color='error' className={classes.errorIcon}>error</Icon>
            <Typography variant='body1' color='error'>
              Sorry, those credentials aren't recognized!
            </Typography>
          </div>
        }
        <Button
          type='submit'
          fullWidth
          disabled={!isFormFilled}
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
