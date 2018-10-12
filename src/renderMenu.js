import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

class renderMenu extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            anchEl : this.props.anchorElForRenderMenu,
            mobileMoreAnchorEl : this.props.mobileMoreAnchorEl,
            isMenuOpen : true
        }
    }

    handleMenuClose = () => {
        this.setState({ 
            anchorEl: null,
            mobileMoreAnchorEl: null
         });
      };

    render() { 
        const anchorEl = this.props.anchorElForRenderMenu;
        const isMenuOpen = Boolean(anchorEl);

        return (
            <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
        );
    }
}

export default renderMenu;