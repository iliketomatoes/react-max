import * as React from 'react';
import style from './style.css';

interface PostProps {
  author: string;
  exposure: number;
}

class Post extends React.Component<PostProps> {

  constructor(props: PostProps) {
    super(props);
  }

  public render() {
    return (
      <div className={style.Post__link}>
        <p>{this.props.author}</p>
        <p>{this.props.exposure}</p>
      </div>
    );
  }
}

export default Post;
