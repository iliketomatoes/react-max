import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { WithStyles, withStyles } from '@material-ui/core';
import { Pane, Article } from '../../models';
import PaneRow from '../PaneRow';
import styles from './styles';

const emptyArticle: Article = {
  title: 'test article'
};

const emptyData: Pane = {
  entity: '',
  categories: [],
  articles: new Array(10).fill(emptyArticle)
};

export interface PaneProps extends WithStyles<typeof styles> {
  data: Pane | null;
}

class PaneView extends React.Component<PaneProps> {

  public render() {

    const { data, classes } = this.props;

    let uiData = data ? data : emptyData;

    return (
      <div className={classes.root}>
        <Typography variant='subheading' gutterBottom>
          {uiData.categories.join(',')}
        </Typography>
        <Paper elevation={1}>
          {uiData.articles.map(article => {
            return <PaneRow article={article}></PaneRow>;
          })}
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(PaneView);
