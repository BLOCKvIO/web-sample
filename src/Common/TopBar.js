import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BLOCKv from './Blockv.js';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {

  let { classes } = props;

  let backButton = <Button color="inherit" onClick={ e => goBack() }>Back</Button>;
  let logoutButton = '';
  let profileButton = <Button color="inherit" onClick={e => window.location.hash='/profile'}>Profile</Button>;
  
  if(props.noProfile)
   profileButton = '';

  if(props.noBack)
   backButton = '';

  if(BLOCKv.UserManager.isLoggedIn){
    logoutButton = <Button color="inherit" onClick={ e => logout() }>Logout</Button>
  }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {backButton}
          <Typography variant="title" color="inherit" className={classes.flex}>
            BLOCKv Sample Application
          </Typography>
          {profileButton}
          {logoutButton}
        </Toolbar>
      </AppBar>
    </div>
  );
}
function goBack() {
  window.history.back();
}

function logout() {
  BLOCKv.UserManager.logout().then(() => {
    window.location.hash = '/login'
  })
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  noBack: PropTypes.bool,
  noProfile: PropTypes.bool
};

export default withStyles(styles)(ButtonAppBar);