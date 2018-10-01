import { connect } from 'react-redux';
import PaneGrid from './pure';
import { PaneGridDispatchToProps } from './pure';
import { panes } from '../../actions';
import { ApplicationState, PanesState } from '../../reducers';

let mapStateToProps = ({ panes }: ApplicationState): PanesState => (
  {
    visiblePanes: panes.visiblePanes,
    firstPane: panes.firstPane,
    secondPane: panes.secondPane,
    thirdPane: panes.thirdPane,
  }
);

let mapDispatchToProps: PaneGridDispatchToProps = {
    onToggleView: panes.toggleView,
  };

export default connect(mapStateToProps, mapDispatchToProps)(PaneGrid);
