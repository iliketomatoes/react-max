import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      background: 'linear-gradient(to right, #4286f4, #373B44)',
      border: 0,
      borderRadius: theme.spacing.unit * 10,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  };
});

export default function Test() {
  const classes = useStyles({});
  return <Button className={classes.root}>Hook Test Two</Button>;
}
