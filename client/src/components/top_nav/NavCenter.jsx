import React from "react";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navCenter: {
    width: "33%",
    textAlign: "center"
  }
})

const NavCenter = () => {
  
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.navCenter} >
        <Button
          component={ Link }
          to="#calculate"
        >
          Calculate
        </Button>
        <Button
          component={ Link }
          to="#about"
        >
          About
        </Button>
        <Button
          component={ Link }
          to="#learn"
        >
          Learn
        </Button>
      </div>
    </>
  )
}

export default NavCenter