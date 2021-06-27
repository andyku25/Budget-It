import './App.css';

import { useState } from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

import Home from "./components/home"
import TopNav from "./components/top_nav"
// import MenuLower from "./components/menu_lower"
import Login from "./components/login"
import Signup from "./components/signup"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe"
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "green",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "blue"
    }
  }
}))

function App() {
  const classes = useStyles();
  const [user, setUser] = useState({
    isLoggedIn: false,
    userInfo: {}
  });

  return (
    <div className={classes.root} >
      <ThemeProvider theme={theme}>
        <Router>
            <TopNav user={user} setUser={setUser} />
          <Switch>
            <Route path="/login" exact component={() => <Login user={user} setUser={setUser} />} />
            <Route path="/signup" exact component={() => <Signup user={user} setUser={setUser} />} />

            <Route path="/" exact component={() => <Home />} />
          </Switch>
            {/* <MenuLower /> */}
        </Router>
      </ThemeProvider>


    </div>
  );
}

export default App;
