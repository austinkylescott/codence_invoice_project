import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./styles/theme";

import NavBar from "./components/NavBar";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NewInvoice from "./pages/NewInvoice";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <NavBar />
          <Switch>
            <Route exact path="/">
              Welcome to Pivot, Inc!
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/invoices/new">
              <NewInvoice />
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
      END OF APP
    </Router>
  );
}

export default App;
