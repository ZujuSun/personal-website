import React from 'react';
import {AppBar,Button,Toolbar,IconButton,Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Menu from '@material-ui/core/Menu';
import { Link } from "react-router-dom";

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
           <MenuItem button component={Link} to="/skills" className="mx-2 font-weight-bold">
            Skills
          </MenuItem>
          <MenuItem button component={Link} to="/experience" className="mx-2 font-weight-bold">
            Experience
          </MenuItem>
          <MenuItem button component={Link} to="/" className="mx-2 font-weight-bold">
            Home
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
                  <FontAwesomeIcon icon={"envelope"} size="md" />
                </IconButton>
                <IconButton aria-haspopup="true" color="inherit" href="/">
                  <FontAwesomeIcon icon={"user-circle"} size="md" />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                  <FontAwesomeIcon icon={"bars"} size="md" />
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