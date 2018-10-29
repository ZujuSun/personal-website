import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PlaceHolder from '../asset/placeholder.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  card: {
    paddingTop: theme.spacing.unit * 2,
    display: 'flex',
    alignItem: 'center',
  },
  sectionDistance: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  cardDistance: {
    paddingTop: theme.spacing.unit,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing.unit ,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 400,
    height: 600,
    margin: 5,
  },
});

class Skills extends React.Component {
  state = {
    OOPComplete: 0,
    MobileComplete: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { OOPComplete, MobileComplete } = this.state;
    if (OOPComplete === 80) {
      this.setState({ OOPComplete: 80 });
    } else {
      const diff = 5;
      this.setState({ OOPComplete: Math.min(OOPComplete + diff, 80) });
    }

    if (MobileComplete === 90) {
      this.setState({ MobileComplete: 90 });
    } else {
      const diff = 5;
      this.setState({ MobileComplete: Math.min(MobileComplete + diff, 90) });
    }
  }

  render() {
      const { classes } = this.props;

      return (
        <Grid container direction = "row" justify = "center" alignItems="flex-start">
          <Grid item xs ={0} sm={4}></Grid>
          <Grid item xs ={12} sm={4}>
            <Card className={classes.card}>
                    <CardMedia
                      className={classes.cover}
                      image = {PlaceHolder}
                      title="Place Holder"
                    />
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography component="h3" variant="h3" align="center">
                          Skills
                        </Typography>

                        <div className={classes.sectionDistance}>
                          <Typography variant="subtitle1">
                            OOP: C, C++, Java, Javscript, Python
                          </Typography>

                          <LinearProgress color="primary" variant="determinate" value={this.state.OOPComplete} />
                        </div>

                        <div className={classes.sectionDistance}>
                          <Typography variant="subtitle1">
                            Mobile: Swift, Objective-C, React Native
                          </Typography>
                          <LinearProgress color="primary" variant="determinate" value={this.state.MobileComplete} />
                        </div>

                        <div className={classes.sectionDistance}>
                          <Typography variant="subtitle1">
                            Full Stack: Ruby On Rails, ASP.NET MVC
                          </Typography>
                          <LinearProgress color="primary" variant="determinate" value={this.state.MobileComplete} />
                        </div>

                        <div className={classes.sectionDistance}>
                          <Typography variant="subtitle1">
                            Front End: React, CSS, HTML, JQuery, BootStrap
                          </Typography>
                          <LinearProgress color="primary" variant="determinate" value={this.state.MobileComplete} />
                        </div>

                        <div className={classes.sectionDistance}>
                          <Typography variant="subtitle1">
                            Back End: NodeJS
                          </Typography>
                          <LinearProgress color="primary" variant="determinate" value={this.state.MobileComplete} />
                        </div>

                        <div className={classes.sectionDistance}>
                          <Typography variant="subtitle1">
                            Version Control: GitLab, GitHub, SVN
                          </Typography>
                          <LinearProgress color="primary" variant="determinate" value={this.state.MobileComplete} />
                        </div>

                        <div className={classes.sectionDistance}>
                          <Typography variant="subtitle1">
                            SDK: Visual Studio, XCode, SubLime
                          </Typography>
                          <LinearProgress color="primary" variant="determinate" value={this.state.MobileComplete} />
                        </div>

                      </CardContent>
                    </div>
              </Card>
          </Grid>
          <Grid item xs={0} sm={4}></Grid>
        </Grid>
      );
  }
}

export default withStyles(styles)(Skills);