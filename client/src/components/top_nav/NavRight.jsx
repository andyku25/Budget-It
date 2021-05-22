import React, { useState } from "react";

import { Menu, MenuItem, IconButton, Button, Avatar, Hidden } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
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

}))

const NavRight = ({ isLoggedIn, setIsLoggedIn }) => {

  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles();

  const handleOptionsMenu = (e) => {
    console.log("options clicked")
    setAnchorEl(e.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }


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
      <Menu 
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
      </Menu>
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
      <Menu 
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
      </Menu>
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