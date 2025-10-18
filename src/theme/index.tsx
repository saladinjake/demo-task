import { ThemeProvider, DefaultTheme } from "styled-components";
import libraryConfig from "../components/libraryConfig";
/*add media queries pluggins as pluggables passed in to theme components*/

export const colors = {
  ...libraryConfig.colors,
};

const fontSizes = {
  small: "1em",
  medium: "2em",
  large: "3em",
  ...libraryConfig.fontSizes,
};

const radiuses = {
  sm: "5px",
};

const breakPoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
  ...libraryConfig.breakPoints,
};

const theme: DefaultTheme = {
  colors,
  fontSizes,
  radiuses,
  breakPoints,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
