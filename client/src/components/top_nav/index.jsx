import React, { useState } from "react";

import { Container, AppBar, Toolbar, Slide, IconButton, useScrollTrigger, Avatar, Menu, MenuItem, Typography } from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from "@material-ui/styles";

import NavLeft from "./NavLeft";
import NavRight from "./NavRight"
import "./styles.scss";
import NavCenter from "./NavCenter";


const useStyles = makeStyles({
  rightyy: {
    marginRight: "10px"
  },
  nav: {
    justifyContent: "space-between"
  }
})

const TopNav = () => {
  const classes = useStyles();

  const [optionsMenuOpen, setOptionsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null)


  function HideOnScroll({children}) {
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }



  const handleOptionsMenu = (e) => {
    console.log("options clicked")
    setAnchorEl(e.currentTarget);
    // setOptionsMenuOpen(optionsMenuOpen ? false : true);
    console.log(optionsMenuOpen);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
    <HideOnScroll>

      <AppBar>
        <Toolbar
          className={classes.nav}
        >
          <div>
            <NavLeft />
          </div>
          <NavCenter />
          <div>
            <NavRight handleClose={handleClose} anchorEl={anchorEl} handleOptionsMenu={handleOptionsMenu} />
          </div>

        </Toolbar>
      </AppBar>

    </HideOnScroll>
    </>
  )
}

export default TopNav