import * as React from 'react';
import { WithStyles, withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styles from './styles';
import { UserConsumer, UserProviderProps } from '../../UserContext';
import NavLink from '../NavigationLink';

interface NavProps extends WithStyles<typeof styles> {
  routes: { label: string, url: string}[];
}

class Navigation extends React.Component<NavProps> {

  state = {
    anchorEl: null,
  };

  handleMenu = (event: React.MouseEvent) => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  handleLogout = (callback: Function) => {
    this.handleClose();
    callback();
  }

  public render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const navItems = this.props.routes.map((route) =>
      <li key={route.label} className={classes.navListItem}>
        <NavLink to={route.url}>{route.label}</NavLink>
      </li>
    );

    return (
      <UserConsumer>{
        ({isAuthenticated, logOut}: UserProviderProps ) => (
          isAuthenticated ?
            <div className={classes.root}>
              <AppBar position='static' color='default'>
                <Toolbar>
                  <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant='title' color='inherit' className={classes.grow}>
                    AIG
                  </Typography>
                    <div className={classes.navAuthSection}>
                      <nav>
                        <ul className={classes.navList}>
                          {navItems}
                        </ul>
                      </nav>
                      <IconButton
                        aria-owns={open ? 'menu-appbar' : undefined}
                        aria-haspopup='true'
                        onClick={this.handleMenu}
                        color='inherit'
                      >
                        <AccountCircle />
                      </IconButton>
                      <Menu
                        id='menu-appbar'
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          horizontal: 'right',
                          vertical: 'top',
                        }}
                        transformOrigin={{
                          horizontal: 'right',
                          vertical: 'top',
                        }}
                        open={open}
                        onClose={this.handleClose}
                        >
                          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                          <MenuItem onClick={() => this.handleLogout(logOut)}>Sign Out</MenuItem>
                        </Menu>
                      </div>
                </Toolbar>
              </AppBar>
            </div>
          : null
        )
      }
      </UserConsumer>
    );
  }
}

export default withStyles(styles)(Navigation);
