import React, { useState } from "react";

import { Container, AppBar, Toolbar, Slide, IconButton, useScrollTrigger, Avatar, Typography } from "@material-ui/core";

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

const TopNav = ({ isLoggedIn }) => {
  const classes = useStyles();

  function HideOnScroll({children}) {
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  return (
    <>
    <HideOnScroll>

      <AppBar>
        <Toolbar
          className={classes.nav}
        >
          <NavLeft />
          <NavCenter />
          <NavRight isLoggedIn={isLoggedIn} />
        </Toolbar>
      </AppBar>

    </HideOnScroll>
    </>
  )
}

export default TopNav