import React from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import placeHolder from '../asset/university-logo.png'

const styles = theme => ({
  root: {
    position: 'relative',
    paddingLeft: theme.spacing.unit * 40,
    paddingRight: theme.spacing.unit * 40,
    paddingTop: theme.spacing.unit * 5,
    backgroundColor: theme.palette.background.paper,
  },
  heroUnit: {
    //paddingTop: theme.spacing.unit * 4,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  card: {
    paddingTop: theme.spacing.unit * 2,
    display: 'flex',
  },
  cardDistance: {
    paddingTop: theme.spacing.unit,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing.unit * 5,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
    height: 200,
    margin: 5,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 50,
    width: 50,
  },
});

class Experience extends React.Component {
    render() {
      const { classes, theme } = this.props;
      const bull = <span className={classes.bullet}>•</span>;
      
      return (
        <Grid container direction = "column" spacing={16} className={classes.root}>
            <Grid direction = "column" spacing={16} className={classes.heroUnit}>
              
              <Typography variant="title" gutterBottom color="primary">
                  Education: <FontAwesomeIcon icon={"graduation-cap"} size="lg" />
              </Typography>
              <Card className={classes.card}>
                  <CardMedia
                    className={classes.cover}
                    image = {placeHolder}
                    title="placeholder image"
                  />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        University Of Waterloo
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        3B Computer Engineering - Candidate for BASc
                      </Typography>
                      <Typography variant="subtitle1" className = {classes.cardDistance}>
                        {bull}Algorithms and Data Structures <br/> {bull}Digital Hardware Systems Design<br/>
                        {bull}Embedded Microprocessor Systems <br/> {bull}Compiler Design
                      </Typography>
                      
                    </CardContent>
                  </div>
            </Card>
            </Grid>

        </Grid>
      );
    }

}

export default withStyles(styles)(Experience);