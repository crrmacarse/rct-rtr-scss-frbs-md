import React from 'react';

import { compose } from 'recompose';
import { withAuthorization } from '../Session';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import DashboardIcon from '@material-ui/icons/Dashboard';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import ManageItems from './ManageItems';
import ManageItemForm from './ManageItemForm';
import ManageList from './ManageList';

const styles = theme => ({
    root: {
        color: theme.palette.text.primary,
      },
    icon: {
        margin: theme.spacing.unit,
        fontSize: 20,
    },
});



class ManagePage extends React.Component {
    state = {
        right: false,
      };
    
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };
    
    render() {
        const { classes } = this.props;

        const sideList = (
            <div className="w-20">
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>

                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
              
                <Divider /> 

                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        )

        return (
            <div className="row">
                <div className="col-10">
                    <ManageList />
                    {/* <ManageItemForm /> */}
                    {/* <ManageItems /> */}
                </div>
                <div className="col-2">
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={this.toggleDrawer('right', true)}
                    >
                        <DashboardIcon className={classes.icon} />
                        Manage
                  </Button>
                </div>
                <SwipeableDrawer
                    anchor="right"
                    open={this.state.right}
                    onClose={this.toggleDrawer('right', false)}
                    onOpen={this.toggleDrawer('right', true)}
                    >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                    >
                    {sideList}
                    </div>
                    </SwipeableDrawer>
            </div>
        )
    }
}


ManagePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const condition = authUser => !!authUser;

const Manage = compose(
    withAuthorization(condition),
    withStyles(styles),
)(ManagePage)

export default Manage;