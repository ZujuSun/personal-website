import React from 'react';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 20,
    },
});
  

class Footer extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Personal Webpage
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    made with <Favorite color="secondary" fontSize="h6" /> by Jackie Sun
                </Typography>
            </footer>
      );
    }
}

export default withStyles(styles)(Footer);