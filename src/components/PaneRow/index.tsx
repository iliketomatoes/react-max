import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { WithStyles, withStyles } from '@material-ui/core';
import { Article } from '../../models';
import styles from './styles';

export interface PaneRowProps extends WithStyles<typeof styles> {
  article: Article;
}

class PaneRow extends React.Component<PaneRowProps> {

  public render() {

    const { article, classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant='subheading' gutterBottom>
          {article.title}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(PaneRow);
