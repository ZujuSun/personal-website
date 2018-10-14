import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import style from "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className={style.root}>
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

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (App);