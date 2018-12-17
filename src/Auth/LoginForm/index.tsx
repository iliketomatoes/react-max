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
interface State {
  isFormFilled: boolean;
  isError: boolean;
  email: string;
  password: string;
}

class LoginForm extends React.PureComponent<Props, State> {

  state: State = {
    isFormFilled: false,
    isError: false,
    email: '',
    password: '',
  };

  componentDidUpdate() {
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
    // TODO
    console.log(this.state);
  }

  render() {

    const { classes } = this.props;
    const { isError, isFormFilled } = this.state;

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
          control={<Checkbox value='remember' color='primary' />}
          label='Remember me'
        />
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
        {
          isError &&
          <span>Sorry there was an error in the form</span>
        }
      </form>
    );

  }
}


export default withStyles(styles)(LoginForm);
