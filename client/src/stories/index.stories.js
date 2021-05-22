import React from "react";

import { storiesOf, addDecorator } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import TopNav from "../components/top_nav";
import MenuLower from "../components/menu_lower";
import Login from "../components/login";

import { MemoryRouter } from "react-router-dom";

addDecorator(story => <MemoryRouter initialEntries={['/']} >{story()}</MemoryRouter>)

storiesOf("TopNav", module)
  .add("Logged out", () => <TopNav />)
  .add("Logged in", () => <TopNav isLoggedIn={true} />)

storiesOf("MenuLower", module)
  .add("Static", () => <MenuLower />)

storiesOf("Login", module)
  .add("Empty", ()  => <Login  />)
  .add("Populated", ()  => <Login values={{email: "john@dough.com", password: "123"}} />)
  