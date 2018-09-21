import { connect } from 'react-redux';
import PaneGrid from './pure';
import * as actions from './actions';
import { ApplicationState } from '../../store';

let mapStateToProps = ({ panes }: ApplicationState) => (
  {
    visiblePanes: panes.visiblePanes,
  }
);

let mapDispatchToProps = {
    onToggleView: actions.toggleView,
  };

export default connect(mapStateToProps, mapDispatchToProps)(PaneGrid);
