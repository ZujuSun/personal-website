import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        margin: 'auto',
        paddingTop:  theme.spacing.unit * 14,
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
                    made with <FontAwesomeIcon icon={"heart"} size="md" color = "red" /> by Jackie Sun
                </Typography>
            </footer>
      );
    }
}

export default withStyles(styles)(Footer);