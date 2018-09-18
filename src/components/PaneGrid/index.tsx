import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import ButtonBase from '@material-ui/core/ButtonBase';
import styles from './styles';

export interface PaneGridProps extends WithStyles<typeof styles> {
  visiblePanes: 1 | 2 | 3;
}

class PaneGrid extends React.Component<PaneGridProps> {

  public render() {

    const { classes, visiblePanes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.paneToggle}>
          <ButtonBase className={classes.paneToggleOption}>1</ButtonBase>
          <ButtonBase className={classes.paneToggleOption}>2</ButtonBase>
          <ButtonBase className={classes.paneToggleOption}>3</ButtonBase>
        </div>
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
