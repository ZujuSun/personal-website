import React from 'react';
import {AppBar,Button,Toolbar,IconButton,Typography,Grid} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import style from "./NavigationBar.css";

class NavigationBar extends React.Component {
    render() {
      return (
        <div className={style.headerRoot}>
          <AppBar position="relative" color="white"  justify="space-around">
            <Toolbar>
              <Grid item xs={1}></Grid>
                <Typography variant="h6" align = "center" noWrap>
                  Jackie Sun
                </Typography>
              <div className={style.grow} />
              <div className={style.sectionDesktop}>
                  <Button size="small" color="inherit" className="mx-2 font-weight-bold">
                    experience
                  </Button>
                <IconButton color="inherit">
                  <MailIcon />
                </IconButton>
                <IconButton
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <Grid item xs={1}></Grid>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }

  export default NavigationBar;