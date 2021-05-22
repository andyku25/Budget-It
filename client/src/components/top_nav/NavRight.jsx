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
  }

}))

const NavRight = ({ isLoggedIn, setIsLoggedIn }) => {

  const [anchorEl, setAnchorEl] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  const handleOptionsMenu = (e) => {
    console.log("options clicked");
    !drawerOpen ? setDrawerOpen(true) : setDrawerOpen(false);
    // setAnchorEl(e.currentTarget);
    console.log(drawerOpen);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const drawerNav = (
    <>
      <List>
          {["Calculate", "About", "Learn", "Login", "Sign Up"].map((text, index) => (
            <ListItem key={index} >
              <ListItemText>
                {text}
              </ListItemText>
            </ListItem>

          ))}
      </List>
    </>
  )

  const navRightRender = isLoggedIn ? (
    <>
      <Avatar alt="username">AK</Avatar>
      <Button
        component={ Link }
        to="/login"
        variant="contained"
        color="secondary"
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

  const navRightMobileRender = isLoggedIn ? (
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
        {/* <IconButton>
          <CloseIcon/>
        </IconButton> */}
        {drawerNav}
      </Drawer>

      {/* <Menu 
        id="options-appbar"
        elevation={0}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClose={handleClose} >
          <Avatar alt="username">AK</Avatar>
        </MenuItem>
        <MenuItem onClose={handleClose} >
          Calculate
        </MenuItem>
        <MenuItem onClose={handleClose} >
          About
        </MenuItem>
        <MenuItem onClose={handleClose} >
          Learn
        </MenuItem>
        <MenuItem onClose={handleClose} onClick={() => setIsLoggedIn(false)} >
          Logout
        </MenuItem>
      </Menu> */}
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
      >
        <IconButton 
          onClick={handleOptionsMenu}
        >
          <CloseIcon/>
        </IconButton>
        {drawerNav}
      </Drawer>

      {/* <Menu 
        id="options-appbar"
        elevation={0}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClose={handleClose} >
          Calculate
        </MenuItem>
        <MenuItem onClose={handleClose} >
          About
        </MenuItem>
        <MenuItem onClose={handleClose} >
          Learn
        </MenuItem>
        <MenuItem onClose={handleClose} >
          Login
        </MenuItem>
        <MenuItem onClose={handleClose} >
          Sign Up
        </MenuItem>
      </Menu> */}
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