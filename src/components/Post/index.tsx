import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

interface PostProps extends WithStyles<typeof styles> {
  author: string;
  exposure: number;
}

class Post extends React.Component<PostProps> {

  constructor(props: PostProps) {
    super(props);
  }

  public render() {
    const { classes, author, exposure } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant='body1' gutterBottom>
          {author}
        </Typography>
        <Typography variant='body1' gutterBottom>
          {exposure}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Post);
