import React from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
  navLeft: {
    width: "33%",
    textAlign: "left"
  }
})

const NavLeft = () => {

  const classes = useStyles();

  return (
    <>
      <div className={classes.navLeft} >
        <Typography 
          variant="h3"
          component="h2"
          >
          Budget-It
        </Typography>
      </div>
    </>
  )
}

export default NavLeft