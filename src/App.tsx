import React from "react";
import { GlobalStyle } from "./global/styles";
import { Routes } from "./routes";
import { ThemeProvider } from "styled-components";

import theme from "./global/styles/theme";
import { CountdownProvider } from "./shared/contexts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CountdownProvider>
        <Routes />
      </CountdownProvider>
    </ThemeProvider>
  );
}

export default App;
