import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  a: {

  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 20}px 0 ${theme.spacing.unit * 6}px`,
    backgroundColor: theme.palette.background.paper,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  socialIcons: {
    marginTop: theme.spacing.unit * 7,
  }
});

class Home extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Zuju(Jackie) Sun
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Hi, My name is Jackie, a 3B Computer Engineering student from University of Waterloo. I am a passionate software developer 
          deeply experienced with both web and mobile development. Currently I am looking for coop positions for my last coop term, please feel free to context me if you are interested! 
        </Typography>
          <Grid container spacing={16} justify="center" className={classes.heroButtons}>
            <Grid item>
                <Button variant="outlined" color="primary">
                  Resume
                </Button>
            </Grid>
            <Grid item>
              <Link to="/Experience">
                <Button variant="contained" color="primary">
                  Experience
                </Button>
              </Link>
            </Grid>
          </Grid>

        <div className={classes.socialIcons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
                <a href='https://www.linkedin.com/in/zuju-sun-24761a10b/' target = '_blank' rel="noopener noreferrer" style={{ color: "#002884", textDecoration: "none"}}>
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
                </a>
            </Grid>
            <Grid item>
              <a href='https://github.com/ZujuSun' target = '_blank' rel="noopener noreferrer" style={{ color: "#002884", textDecoration: "none"}}>
                <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
              </a>
            </Grid>
            <Grid item>
              <a href='https://www.instagram.com/sunzuju_jackie/?hl=en' rel="noopener noreferrer" target = '_blank' style={{ color: "#002884", textDecoration: "none"}}>
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);