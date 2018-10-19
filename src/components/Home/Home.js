import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
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
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
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
        <Typography variant="h6" align="left" color="textSecondary" paragraph>
          Hi, My name is Jackie, a 3B Computer Engineering student from University of Waterloo. I am passionate software developer who were very 
          deeply experienced with both web and mobile development. Currently I am looking for positions regarding my last coop term, please feel free to contexg me if you are interested! 
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
      </div>
    </div>
    );
  }
}

export default withStyles(styles)(Home);