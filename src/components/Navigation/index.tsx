import * as React from 'react';
import { WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles';
import NavLink from '../NavLink';

interface NavProps extends WithStyles<typeof styles> {
  routes: { label: string, url: string}[];
}

class Navigation extends React.Component<NavProps> {

  constructor(props: NavProps) {
    super(props);
  }

  handleClick = (e: React.SyntheticEvent) => {
    console.log({e});
    console.log('this is:', this);
  }

  public render() {
    const { classes } = this.props;

    const navItems = this.props.routes.map((route) =>
      <li key={route.label} className={classes.navListItem}>
        <NavLink to={route.url}>{route.label}</NavLink>
      </li>
    );

    return (
      <div className={classes.root}>
        <AppBar position='static' color='default'>
          <Toolbar>
            <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='title' color='inherit' className={classes.grow}>
              AIG
            </Typography>
            <nav>
              <ul className={classes.navList}>
                {navItems}
              </ul>
            </nav>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navigation);
