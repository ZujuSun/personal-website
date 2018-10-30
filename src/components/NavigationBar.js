import React from 'react';
import {AppBar,Button,Toolbar,IconButton,Typography} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
  headerRoot: {
    maxWidth: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 12,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
});


class NavigationBar extends React.Component {
    state = {
      mobileMoreAnchorEl: null,
    };

    handleMobileMenuOpen = event => {
      this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
      this.setState({ mobileMoreAnchorEl: null });
    };

    render() {
      const { mobileMoreAnchorEl } = this.state;
      const {classes} = this.props
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={this.handleMobileMenuClose}
        >
          <MenuItem>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton color="inherit">
              <Badge badgeContent={11} color="secondary">
              <AccountCircle />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={this.handleProfileMenuOpen}>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );

      return (
        <div className={classes.headerRoot}>
          <AppBar position="relative" color="primary"  justify="space-around">
            <Toolbar>
                <Typography variant="h6" align = "center" color="inherit" noWrap>
                  Jackie Sun
                </Typography>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Button size="small" color="inherit"  href="/skills" className="mx-2 font-weight-bold">
                    Skills
                </Button>
                <Button size="small" color="inherit"  href="/experience"className="mx-2 font-weight-bold">
                    experience
                </Button>
                <IconButton color="inherit" href="mailto:z59sun@uwaterloo.ca?Subject=thanks%20for%20reaching">
                  <MailIcon />
                </IconButton>
                <IconButton aria-haspopup="true" color="inherit" href="/">
                    <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
        </div>
      );
    }
  }

  export default withStyles(styles)(NavigationBar);