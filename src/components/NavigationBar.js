import React from 'react';
import {AppBar,Button,Toolbar,IconButton,Typography} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '@material-ui/core/styles';

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
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  sectionDesktop: {
    display: 'flex',
  }
});

class NavigationBar extends React.Component {

    render() {
      const {classes} = this.props

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
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }

  export default withStyles(styles)(NavigationBar);