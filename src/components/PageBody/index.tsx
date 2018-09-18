import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import styles from './styles';

interface PageBodyProps extends WithStyles<typeof styles> {}

class PageBody extends React.Component<PageBodyProps> {

  public render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
        >
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(PageBody);
