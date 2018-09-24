import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import PaneToggle from '../PaneToggle';
import { PaneGridState } from './types';
import * as paneGridActions from './actions';
import styles from './styles';

// Props passed from either:
// 1 - A parent component
// 2 - from mapStateToProps
// 3 - from mapDispatchToProps
interface PaneGridProps extends PaneGridState {
  onToggleView: typeof paneGridActions.toggleView;
}

class PaneGrid extends React.Component<PaneGridProps & WithStyles<typeof styles>> {

  public render() {

    const { classes, visiblePanes, onToggleView } = this.props;

    return (
      <div className={classes.root}>
        <PaneToggle onToggleView={onToggleView}></PaneToggle>
        <div className={classNames(classes.paneContainer, {
          [classes.onePane]: visiblePanes === 1,
          [classes.twoPanes]: visiblePanes === 2,
          [classes.threePanes]: visiblePanes > 2,
        })}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaneGrid);
