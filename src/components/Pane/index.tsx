import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { WithStyles, withStyles } from '@material-ui/core';
import { Pane } from '../../models';
import styles from './styles';

export interface PaneProps extends WithStyles<typeof styles> {
  data: Pane | null;
}

class PaneView extends React.Component<PaneProps> {

  public render() {

    const { data, classes } = this.props;

    if (data === null) return ('Loading');

    return (
      <div className={classes.root}>
        <Typography variant='subheading' gutterBottom>
          {data.categories.join(',')}
        </Typography>
        <Paper elevation={1}>
          Post list
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(PaneView);
