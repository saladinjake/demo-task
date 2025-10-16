import { css } from "styled-components";
export const trimString = (value: string, maxStringLength: number): string => {
  if (!value) return "";
  return value.length > maxStringLength
    ? `${value.substring(0, maxStringLength)}...`
    : value;
};

export const mediaDefinitions = {
  // custom usage
  "2xl": "5000px",
  xxl: "3000px",
  xl: "2090px",
  lg: "1800px",
  md: "1280px",
  tabPortrait: "1024px",
  tab: "1000px",
  sm: "926px",
  xs: "480px",
  zero: "10px",

  //generic usage
  xxmobileSmall: "100px",
  mobileSmall: "320px",
  mobileMedium: "375px",
  mobileLarge: "425px",
  tablets: "768px",
  tabletsPort: "998px",
  midBreak: "1000px",
  laptopSmall: "1074px",
  laptopsLarge: "1440px",
  desktops: "2560px",
  nonRetinaMinWidth: "1200px",
  nonRetinaMaxWidth: "1600px",
  retinaMinWidth: "1024px", //ipad pro
  retinaMaxWidth: "1920px",
  smallMobilePhonesGeneric: {
    min: "320px",
    max: "480px",
  },
  largeMobilePhonesGeneric: {
    min: "360px",
    max: "640px",
  },
  miniLaptops: {
    min: "1024px",
    max: "1920px",
  },
  smallLaptopsGeneric: {
    min: "768px",
    max: "1520px",
  },
  largeLaptopsGeneric: {
    min: "1030px",
    max: "9000px",
  },
  tabletsPortraits: {
    min: "768px",
    max: "1007px",
    orientation: "portrait",
  },
  tabletsLandScape: {
    min: "768px",
    max: "1007px",
    orientation: "landscape",
  },
};
