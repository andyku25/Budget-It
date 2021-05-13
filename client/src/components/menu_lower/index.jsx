import React from "react";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

// import { SvgIcon } from '@material-ui/core'
import { Home, TrendingUp, MonetizationOn } from '@material-ui/icons';

// import "./styles.scss"

const MenuLower = () => {

  return (
    <>
      <BottomNavigation className="lower-toolbar" >
        <BottomNavigationAction icon={<Home />} />
        <BottomNavigationAction icon={<TrendingUp />} />
        <BottomNavigationAction icon={<MonetizationOn />} />
      </BottomNavigation>
    </>
  )
}

export default MenuLower