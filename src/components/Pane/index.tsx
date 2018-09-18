import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { WithStyles, withStyles } from '@material-ui/core';
import styles from './styles';

export interface PaneProps extends WithStyles<typeof styles> {
  categories: string[];
}

class Pane extends React.Component<PaneProps> {

  public render() {

    const { categories, classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant='subheading' gutterBottom>
          {categories.join(',')}
        </Typography>
        <Paper elevation={1}>
          Post list
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Pane);
