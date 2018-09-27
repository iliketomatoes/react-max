import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import { toggleView } from '../../actions';
import styles from './styles';

export interface PaneToggleProps extends WithStyles<typeof styles> {
  onToggleView: typeof toggleView;
}

class PaneToggle extends React.Component<PaneToggleProps> {

  public render() {

    const { classes, onToggleView } = this.props;

    return (
      <div className={classes.root}>
        <ButtonBase className={classes.option} onClick={() => onToggleView(1)}>1</ButtonBase>
        <ButtonBase className={classes.option} onClick={() => onToggleView(2)}>2</ButtonBase>
        <ButtonBase className={classes.option} onClick={() => onToggleView(3)}>3</ButtonBase>
      </div>
    );
  }
}

export default withStyles(styles)(PaneToggle);
