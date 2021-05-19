import React from "react";

import { Menu, MenuItem, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


const NavRight = ({handleClose, anchorEl, handleOptionsMenu}) => {


  return (
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
          vertical: "bottom",
          horizontal: "left",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClose={handleClose} >
          Login
        </MenuItem>
      </Menu>
    </>
  )
}

export default NavRight