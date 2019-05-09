import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import PlaceHolder from '../asset/placeholder.jpg';
import PersonalWebsite from '../asset/personal-websit.png';
import JSUniverse from '../asset/JS-Universe.mp4'
import JSUniverseGIF from '../asset/giphy.gif'

const styles = theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    margin: '0 auto',
    maxWidth: 900,
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: theme.spacing.unit * 600,
  },
  sectionDistance: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  projectCardRoot: {
    margin: '0, auto',
    textAlign: 'center',
  },

  projectCard: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing.unit,
  },
  SectionTitle: {
     paddingTop: theme.spacing.unit * 3,
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
    if (OOPComplete === 100) {
      this.setState({ OOPComplete: 100 });
    } else {
      const diff = 5;
      this.setState({ OOPComplete: Math.min(OOPComplete + diff, 100) });
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
        <div className={classes.root}>
          <Grid container spacing={32} className={classes.SectionTitle} direction = "column" justify = "center">
            <Grid item>
              <Typography component="h3" variant="h3" align="center">
                  Skills
              </Typography>
            </Grid>

            <Grid item>
            <Card className={classes.card}>
                    <CardMedia
                      className={classes.cover}
                      image = {PlaceHolder}
                      title="Place Holder"
                    />
                    <div className={classes.details}>
                      <CardContent>
                          <Typography variant="h5" align="center">
                            Software
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
                          <LinearProgress color="primary" variant="determinate" value={this.state.OOPComplete} />
                        </div>

                        <div className={classes.sectionDistance}>
                          <Typography variant="subtitle1">
                            Full Stack: Ruby On Rails, ASP.NET MVC
                          </Typography>
                          <LinearProgress color="primary" variant="determinate" value={this.state.OOPComplete} />
                        </div>

                        <div className={classes.sectionDistance}>
                          <Typography variant="subtitle1">
                            Front End: React, CSS, HTML, JQuery, BootStrap
                          </Typography>
                          <LinearProgress color="primary" variant="determinate" value={this.state.OOPComplete} />
                        </div>

                        <div className={classes.sectionDistance}>
                          <Typography variant="subtitle1">
                            Back End: NodeJS
                          </Typography>
                          <LinearProgress color="primary" variant="determinate" value={this.state.OOPComplete} />
                        </div>

                        <div className={classes.sectionDistance}>
                          <Typography variant="subtitle1">
                            Version Control: GitLab, GitHub, SVN
                          </Typography>
                          <LinearProgress color="primary" variant="determinate" value={this.state.OOPComplete} />
                        </div>

                        <div className={classes.sectionDistance}>
                          <Typography variant="subtitle1">
                            SDK: Visual Studio, XCode, SubLime
                          </Typography>
                          <LinearProgress color="primary" variant="determinate" value={this.state.OOPComplete} />
                        </div>

                      </CardContent>
                    </div>
              </Card>
            </Grid>
            <Grid item>
              <Typography component="h3" variant="h3" align="center">
                  Projects
              </Typography>
            </Grid>

            <Grid item className={classes.projectCardRoot}>
              <Grid container direction = "row" spacing={32}>
                <Grid item sm={12} md={6} lg={6}>
                    <Card className={classes.projectCard}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Kicks4Love
                        </Typography>
                        <Typography>
                          A dynamic Web Application built in Ruby on Rails which allows users to post and edit multiple articles in the forum
                        </Typography>
                      </CardContent>
                    </Card>
                </Grid>

                <Grid item xs ={12} sm={6} md={6}>
                    <Card className={classes.projectCard}>
                      <CardMedia
                        className={classes.cardMedia}
                        image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Kicks4Love - React Native
                        </Typography >
                        <Typography gutterBottom>
                          A dynamic Mobile Application built in React Native which allows users read and share their views about the sneaker pages
                        </Typography>
                      </CardContent>
                      <CardActions>
                      </CardActions>
                    </Card>
                </Grid>

                <Grid item xs ={12} sm={6} md={6}>
                    <Card className={classes.projectCard}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={PersonalWebsite}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Personal-Website
                        </Typography >
                        <Typography gutterBottom>
                          an dynamic and responsive Webpage built in React and FireBase Server (on-going)
                        </Typography>
                      </CardContent>
                      <CardActions>
                      </CardActions>
                    </Card>
                </Grid>


                <Grid item xs ={12} sm={6} md={6}>
                    <Card className={classes.projectCard}>
                      <CardMedia
                        className={classes.cardMedia} da
                        image={JSUniverseGIF}
                        // src = {JSUniverseGIF}
                        title="Image title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          JS-Universe
                        </Typography >
                        <Typography gutterBottom>
                          An AR IOS App built in Swift to augment the motions of the Solar System
                        </Typography>
                      </CardContent>
                      <CardActions>
                      </CardActions>
                    </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

        </div>
      );
  }
}

export default withStyles(styles)(Skills);