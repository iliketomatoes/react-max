import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import PaneToggle from '../PaneToggle';
import { PanesState } from '../../reducers';
import { toggleView } from '../../actions';
import styles from './styles';

export interface PaneGridDispatchToProps {
  onToggleView: typeof toggleView;
}

type allProps = PaneGridDispatchToProps & PanesState & WithStyles<typeof styles>;

class PaneGrid extends React.Component<allProps> {

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
