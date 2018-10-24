import * as React from 'react';
import Homepage from '../../modules/news/containers/Homepage';

interface NewsProps {}

class News extends React.Component<NewsProps> {

  public render() {
    return (
      <Homepage></Homepage>
    );
  }
}

export default News;
