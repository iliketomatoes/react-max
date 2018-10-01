import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { PanesState } from '../../reducers';
import { panes } from '../../actions';
import PaneToggle from '../PaneToggle';
import Pane from '../Pane';
import styles from './styles';

export interface PaneGridDispatchToProps {
  onToggleView: typeof panes.toggleView;
}

type allProps = PaneGridDispatchToProps & PanesState & WithStyles<typeof styles>;

class PaneGrid extends React.Component<allProps> {

  public render() {

    const { classes,
        visiblePanes,
        onToggleView,
        firstPane,
        secondPane,
        thirdPane } = this.props;

    return (
      <div className={classes.root}>
        <PaneToggle onToggleView={onToggleView}></PaneToggle>
        <div className={classNames(classes.paneContainer, {
          [classes.onePane]: visiblePanes === 1,
          [classes.twoPanes]: visiblePanes === 2,
          [classes.threePanes]: visiblePanes > 2,
        })}>
          <Pane data={firstPane} />
          <Pane data={secondPane} />
          <Pane data={thirdPane} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaneGrid);
