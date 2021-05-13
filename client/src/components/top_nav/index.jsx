import React from "react";

import { AppBar, Toolbar, Slide, IconButton } from "@material-ui/core";

import { Menu } from '@material-ui/icons';


const TopNav = () => {

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton>
            <Menu />

          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default TopNav