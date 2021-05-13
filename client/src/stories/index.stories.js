import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import MenuLower from "../components/menu_lower";

import Login from "../components/login";

storiesOf("Login", module)
  .add("Empty", ()  => <Login  />)


storiesOf("MenuLower", module)
  .addP("Static", () => <MenuLower /> )