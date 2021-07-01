import React from "react";
import { useHistory } from "react-router-dom"

import { AppBar, Toolbar, Slide, useScrollTrigger, Hidden } from "@material-ui/core";

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

const TopNav = ({ user, setUser }) => {
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

      <AppBar position="sticky" >
        <Toolbar
          className={classes.nav}
        >
          <NavLeft />
          <Hidden smDown >
            <NavCenter />

          </Hidden>
          <NavRight user={user} setUser={setUser} />
        </Toolbar>
      </AppBar>

    </HideOnScroll>
    </>
  )
}

export default TopNav