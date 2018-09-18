import * as React from 'react';
import PaneGrid from '../../components/PaneGrid';
import Pane from '../../components/Pane';

interface NewsProps {}

class News extends React.Component<NewsProps> {

  state = {
    firstPane: {
      categories: ['Automotive']
    },
    secondPane: {
      categories: ['Telecommunication', 'Technology']
    },
    thirdPane: {
      categories: ['Pharmaceutical', 'AIGPAR']
    },
    visiblePanes: 3 as 1 | 2 | 3
  };

  public render() {

    const { firstPane, secondPane, thirdPane, visiblePanes } = this.state;

    return (
      <PaneGrid visiblePanes={visiblePanes}>
        <Pane categories={firstPane.categories} />
        {visiblePanes > 1 && <Pane categories={secondPane.categories} />}
        {visiblePanes > 2 && <Pane categories={thirdPane.categories} />}
      </PaneGrid>
    );
  }
}

export default (News);
