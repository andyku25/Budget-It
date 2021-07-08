import React, { useState } from "react";

import { Menu, MenuItem, IconButton, Button, Avatar, Hidden, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  navRight: {
    width: "33%",
    textAlign: "right",
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      width: "25%"
    }
  },
  mobileDrawer: {
    height: "100%",
    width: "100%",
    textAlign: "center",
  },
  mobileDrawerClose: {
    justifyContent: "flex-end"
  }

}))

const NavRight = (props) => {

  // const [anchorEl, setAnchorEl] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  const handleOptionsMenu = (e) => {
    console.log("options clicked");
    !drawerOpen ? setDrawerOpen(true) : setDrawerOpen(false);
    // setAnchorEl(e.currentTarget);
    console.log(drawerOpen);
  }

  // const handleLogout = () => {
  //   props.setUser({
  //     isLoggedIn: false,
  //     userInfo: {}
  //   })

  // }

  // const handleClose = () => {
  //   setAnchorEl(null);
  // }


  const drawerNav = (
    <>
      <List>
        <ListItem 
          className={classes.mobileDrawerClose}
        >
        <IconButton
          onClick={handleOptionsMenu}
        >
          <CloseIcon />
        </IconButton>

        </ListItem>
        {["Calculate", "About", "Learn"].map((text, index) => (
          <ListItem button key={index} component={Link} to={() => `/${text}`} onClick={handleOptionsMenu} className={classes.mobileDrawer} >
            <ListItemText>
              {text}
            </ListItemText>
          </ListItem>
        ))}
        {(props.user.isLoggedIn && 
          <ListItem button onClick={handleOptionsMenu && props.handleLogout} className={classes.mobileDrawer} >
            <ListItemText>Logout</ListItemText>
          </ListItem>) || 
          ["Login", "Signup"].map((text, index) => (
            <ListItem button key={index} component={Link} to={() => `/${text}`} onClick={handleOptionsMenu} className={classes.mobileDrawer} >
              <ListItemText>
                {text}
              </ListItemText>
            </ListItem>
          )
        )}
      </List>
    </>
  )

  // render the desktop view for logged in/out users 
  const navRightRender = props.user.isLoggedIn ? (
    <>
      <Avatar alt="username">{props.user.userInfo.first_name[0].toUpperCase()}</Avatar>
      <Button
        component={ Link }
        to="/login"
        variant="contained"
        color="secondary"
        onClick={props.handleLogout}
      >
        Logout
      </Button>
    </>
  ) : (
    <>
      <Button
        component={ Link }
        to="/login"
        variant="outlined"
        color="secondary"
      >
        Login
      </Button>
      <Button
        component={ Link }
        to="/signup"
        variant="contained"
        color="secondary"
      >
        Sign Up
      </Button>
    </>
  )

  // render the mobile view for logged in/out users 
  const navRightMobileRender = props.user.isLoggedIn ? (
    <>
      <IconButton 
        onClick={handleOptionsMenu}
        aria-label="More options"
        aria-haspopup="true"
        aria-controls="options-appbar"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        id="options-appbar"
        anchor="top"
        open={drawerOpen}
      >
        {drawerNav}
      </Drawer>
    </>
  ) : (
    <>
      <IconButton 
        onClick={handleOptionsMenu}
        aria-label="More options"
        aria-haspopup="true"
        aria-controls="options-appbar"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        id="options-appbar"
        anchor="top"
        open={drawerOpen}
        onClose={handleOptionsMenu}
      >
        {drawerNav}
      </Drawer>

    </>
  )

  return (
    <>
      <div className={classes.navRight} >
        <Hidden mdUp >
          {navRightMobileRender}

        </Hidden>
        <Hidden smDown >
          {navRightRender}

        </Hidden>
      </div>
    </>
  )
}

export default NavRight