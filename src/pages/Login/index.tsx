import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import styles from './styles';
import LoginForm from '../../components/LoginForm/pure';
import background from '../../static/images/login-page.jpg';
import background2x from '../../static/images/login-page_2x.jpg';

class Login extends React.Component<WithStyles<typeof styles>> {
  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.imgCtr}>
          <picture>
            <source media='(max-width: 640px)' srcSet={background} />
            <source media='(min-width: 641px)' srcSet={background2x} />
            <img src={background} alt='AIG Login page' className={classes.imgEl}/>
          </picture>
        </div>
        <Grid container direction='row'
        justify='center'
        alignItems='center'
        className={classes.grid}>
          <Card className={classes.card}>
            <LoginForm />
          </Card>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
