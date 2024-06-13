import React from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./router";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
