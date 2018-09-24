import * as React from 'react';
import PaneGrid from '../../components/PaneGrid';
import Pane from '../../components/Pane';
import StarWars from '../../components/StarWars';

interface NewsProps {}

class News extends React.Component<NewsProps> {

  state = {
    firstPane: {
      categories: ['Automotive', 'Twitter']
    },
    secondPane: {
      categories: ['Telecommunication', 'Technology']
    },
    thirdPane: {
      categories: ['Pharmaceutical', 'AIGPAR']
    }
  };

  public render() {

    const { firstPane, secondPane, thirdPane } = this.state;

    return (
      <PaneGrid>
        <Pane categories={firstPane.categories} />
        <Pane categories={secondPane.categories} />
        <Pane categories={thirdPane.categories} />
        <StarWars></StarWars>
      </PaneGrid>
    );
  }
}

export default News;
