import React, { useState } from "react";

import { Menu, MenuItem, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


const NavRight = () => {

  const [anchorEl, setAnchorEl] = useState(null)

  const handleOptionsMenu = (e) => {
    console.log("options clicked")
    setAnchorEl(e.currentTarget);
    // setOptionsMenuOpen(optionsMenuOpen ? false : true);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

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
          vertical: "top",
          horizontal: "right",
        }}
        getContentAnchorEl={null}
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