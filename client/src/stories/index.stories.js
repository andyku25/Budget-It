import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TopNav from "../components/top_nav";
import MenuLower from "../components/menu_lower";
import Login from "../components/login";

storiesOf("TopNav", module)
  .add("default", () => <TopNav />)

storiesOf("MenuLower", module)
  .add("Static", () => <MenuLower />)

storiesOf("Login", module)
  .add("Empty", ()  => <Login  />)
  .add("Populated", ()  => <Login values={{email: "john@dough.com", password: "123"}} />)
  