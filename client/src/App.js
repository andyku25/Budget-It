import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import Home from "./components/home"
import TopNav from "./components/top_nav"
import MenuLower from "./components/menu_lower"
import Login from "./components/login"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe"
    }
  }
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <TopNav />
          <Route path="/login" exact component={() => <Login />} />

          <Route path="/" exact component={() => <Home />} />
          <MenuLower />
        </Switch>
      </Router>
      </ThemeProvider>


    </div>
  );
}

export default App;
