import * as React from 'react';
import { makeStyles, WithStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> { }

const useStyles = makeStyles<typeof styles>(styles);

export default function Login(props: Props) {

  const classes = useStyles(props);

  return (
    <div className='row'>
      <h2>Login page</h2>
      <Button className={classes.root}>Login</Button>
    </div>
  );
}
