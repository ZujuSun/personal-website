import React from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import UniversityLogo from '../asset/university-logo.png'
import FGFLogo from '../asset/fgf-logo.jpeg'
import BDOLogo from '../asset/bdo-logo.png'
import RHBoysLogo from '../asset/RHBoys-logo.png'
import XELogo from '../asset/XE-logo.png'

const styles = theme => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing.unit * 5,
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
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
    marginLeft: theme.spacing.unit ,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 180,
    height: 180,
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
      const { classes } = this.props;
      const bull = <span className={classes.bullet}>•</span>;
      
      return (
          <Grid container direction = "column" spacing={16} className={classes.root}>
          <Grid item>
            {/* cards */}
            <Grid container direction = "column" spacing={8} className={classes.heroUnit}>
              <Grid item>
                <Typography variant="title" gutterBottom color="primary">
                    Education: <FontAwesomeIcon icon={"graduation-cap"} size="lg" />
                </Typography>
              </Grid>
              <Grid item>
                <Card className={classes.card}>
                    <CardMedia
                      className={classes.cover}
                      image = {UniversityLogo}
                      title="University Logo"
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
          </Grid>

          <Grid item>
            {/* cards */}
            <Grid container direction = "column" spacing={8} className={classes.heroUnit}>
              <Grid item>
                <Typography variant="title" gutterBottom color="primary">
                    Experience: <FontAwesomeIcon icon={"building"} size="lg" />
                </Typography>
              </Grid>

              <Grid item>
                <Card className={classes.card}>
                    <CardMedia
                      className={classes.cover}
                      image = {XELogo}
                      title="XE.com"
                    />
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                          IOS Developer
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Jan 2018 – Apr 2018 | NewMarket, CA
                        </Typography>
                        <Typography variant="subtitle1" className = {classes.cardDistance}>
                          {bull}Responsible for the updates and optimization of the latest modules in XE Currency App
                          <br/>
                          {bull}Constructed the Widget and IMessage Extension from scratch for the app redesign
                          <br/>
                          {bull}Optimized UI components, maintained modular codebase and developed a customized animation for the Travel App
                          <br/>
                          {bull}Designed and modified multiple DataManagers in CocoaPods to handle multiple changes in API Requests
                          <br/>
                          {bull}Involved at every product phase from concept creation to app store deployment
                        </Typography>
                        
                      </CardContent>
                    </div>
                </Card>
              </Grid>

              <Grid item>
                {/* cards */}
                <Card className={classes.card}>
                    <CardMedia
                      className={classes.cover}
                      image = {RHBoysLogo}
                      title="RHBoys"
                    />
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                          Full Stack Developer
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          May 2017 – Aug 2017 | Kitchener, CA
                        </Typography>
                        <Typography variant="subtitle1" className = {classes.cardDistance}>
                          {bull}Constructed a fully functional Content Management System for the company’s Blackboxsite from scratch with Ruby on Rails
                          <br/>
                          {bull}Created newsletter contact us back-end design and news letter email distribution with Rails Action Mailer
                          <br/>
                          {bull}Collaboratively built the alpha version of the mobile app with React Native
                          <br/>
                          {bull}Fully participated in Agile Methodologies with all members of the development team
                          <br/>
                          {bull}Developed multiple API endpoints for using Ruby On Rails Framework
                        </Typography>
                        
                      </CardContent>
                    </div>
                </Card>
              </Grid>

              <Grid item>
                <Card className={classes.card}>
                    <CardMedia
                      className={classes.cover}
                      image = {BDOLogo}
                      title="BDO Solutions"
                    />
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                          Software Consultant
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Sept 2016 – Dec 2016 | Mississauga, CA
                        </Typography>
                        <Typography variant="subtitle1" className = {classes.cardDistance}>
                          {bull}Developed, maintained and supported enterprise solutions acrossvarious business modules.
                          <br/>
                          {bull}Implemented seamless data integrations for QPA by applying knowl-edge of SSIS, SSRS and ASP.NET platform
                          <br/>
                          {bull}Created and maintained server databases and related stored pro-cedures and triggers
                          <br/>
                          {bull}Conducted tests and trial runs to ensure that the program pro-duced the desired results in a timely manner.
                          <br/>
                          {bull}Responsible for deploying and updating the latest enterprise solu-tions on Linux-based server
                        </Typography>
                        
                      </CardContent>
                    </div>
                </Card>
              </Grid>

              <Grid item>
                <Card className={classes.card}>
                    <CardMedia
                      className={classes.cover}
                      image = {FGFLogo}
                      title="fgf brands"
                    />
                    <div className={classes.details}>
                      <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                          Innovation Driven Web Developer
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          Jan 2016 - Apr 2016 | North York, CA
                        </Typography>
                        <Typography variant="subtitle1" className = {classes.cardDistance}>
                          {bull}Independently Developed a seamless integration framework between SharePoint and Asana
                          <br/>
                          {bull}Created an image slider within an application module with customized animation in JavaScript
                          <br/>
                          {bull}Developed a travelling expense mobile application which is in sync with SharePoint by using ASP.NET MVC4
                          <br/>
                          {bull}Used both client and server side object model in C# to maintainand manage Blackbox and Teamsite of SharePoint
                          <br/>
                          {bull}created an Android App that was able to add, re-trieve and remove data from SQL server by calling REST API
                        </Typography>
                        
                      </CardContent>
                    </div>
                </Card>
              </Grid>
              
            </Grid>
          </Grid>

        </Grid>
      );
    }

}

export default withStyles(styles)(Experience);