import * as React from 'react';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Pane from '../../components/Pane';

interface NewsProps extends WithStyles<typeof styles> {}

class News extends React.Component<NewsProps> {
  public render() {
    return (
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='center'
      >
        <Pane />
      </Grid>
    );
  }
}

export default withStyles(styles)(News);
