import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      AppWhite: string;
      AppBlack: string;
      AppGrey: string;
      AppDarkGrey: string;
      AppLightGrey: string;
      AppLighterGrey: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    radiuses: {
      sm: string;
    };

    breakPoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
  }
}
