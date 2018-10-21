import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 20}px 0 ${theme.spacing.unit * 6}px`,
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
      <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Zuju(Jackie) Sun
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Hi, My name is Jackie, a 3B Computer Engineering student from University of Waterloo. I am a passionate software developer 
          deeply experienced with both web and mobile development. Currently I am looking for coop positions for my last coop term, please feel free to context me if you are interested! 
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                About Me
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Experience
              </Button>
            </Grid>
          </Grid>
        </div>

        <div className={classes.socialIcons}>
          <Grid container spacing={16} justify="center">
            <Grid item>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
            </Grid>
            <Grid item>
                <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
            </Grid>
            <Grid item>
                <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
    );
  }
}

export default withStyles(styles)(Home);