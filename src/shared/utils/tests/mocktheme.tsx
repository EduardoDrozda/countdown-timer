import theme from "../../../global/styles/theme";
import { ThemeProvider } from "styled-components";

export function MockTheme({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
