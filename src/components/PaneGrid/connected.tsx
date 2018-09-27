import { connect } from 'react-redux';
import PaneGrid from './pure';
import { toggleView } from '../../actions';
import { ApplicationState } from '../../reducers';

let mapStateToProps = ({ panes }: ApplicationState) => (
  {
    visiblePanes: panes.visiblePanes,
  }
);

let mapDispatchToProps = {
    onToggleView: toggleView,
  };

export default connect(mapStateToProps, mapDispatchToProps)(PaneGrid);
