import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import theme from "./styles/theme";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavBar />
        After nav
      </ThemeProvider>
    </div>
  );
}

export default App;
