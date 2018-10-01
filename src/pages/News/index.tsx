import * as React from 'react';
import PaneGrid from '../../components/PaneGrid';

interface NewsProps {}

class News extends React.Component<NewsProps> {

  public render() {
    return (
      <PaneGrid></PaneGrid>
    );
  }
}

export default News;
