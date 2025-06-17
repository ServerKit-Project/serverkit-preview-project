import type { DefaultTheme } from "styled-components";

export interface Theme {
  colors: {
    primary: string;
    primaryGreen: string;
    secondary: string;
    danger: string;
    warning: string;
    red: string;
    graphite: string;
    lightGray: string;
    mediumGray: string;
    darkSlateGray: string;
    pureWhite: string;
    deepBlack: string;
    charcoalGray: string;
    slateBlue: string;
    deepNavy: string;
    ashGray: string;
    steelGray: string;
    midnightBlack: string;
    darkGray: string;
    darkBlue: string;
    darkGreen: string;
    grayishBlue: string;
    grayish: string;
    text: {
      primary: string;
      secondary: string;
      white: string;
    };
    background: {
      primary: string;
      secondary: string;
      hover: {
        primary: string;
        secondary: string;
        danger: string;
      };
    };
    border: {
      default: string;
      hover: string;
    };
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: string;
  fontSize: {
    small: string;
    medium: string;
    large: string;
  };
  fontFamily: {
    sans: string;
    pretendard: string;
    montserrat: string;
  };
  fontWeights: {
    normal: string;
    medium: string;
    bold: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#00FF99",
    primaryGreen: "#00FF99",
    secondary: "#707070",
    danger: "#FF0000",
    warning: "#FFA500",
    red: "#FF0000",
    graphite: "#707070",
    lightGray: "#E4E4E4",
    mediumGray: "#ACACAC",
    darkSlateGray: "#5A5A5A",
    pureWhite: "#FFFFFF",
    deepBlack: "#1B1E23",
    charcoalGray: "#3A3939",
    slateBlue: "#292D34",
    deepNavy: "#14171B",
    ashGray: "#666666",
    steelGray: "#363E49",
    midnightBlack: "#11141A",
    darkGray: "#454545",
    darkBlue: "#292D33",
    darkGreen: "#002D1B",
    grayishBlue: "#282C31",
    grayish: "#858585",
    text: {
      primary: "#1B1E23",
      secondary: "#707070",
      white: "#FFFFFF",
    },
    background: {
      primary: "#00FF99",
      secondary: "#E4E4E4",
      hover: {
        primary: "#00CC7A",
        secondary: "#D4D4D4",
        danger: "#CC0000",
      },
    },
    border: {
      default: "#ACACAC",
      hover: "#707070",
    },
  },
  spacing: {
    small: "8px 16px",
    medium: "10px 20px",
    large: "12px 24px",
  },
  borderRadius: "6px",
  fontSize: {
    small: "14px",
    medium: "14px",
    large: "16px",
  },
  fontFamily: {
    sans: "Pretendard_Variable, sans-serif",
    pretendard:
      "PretendardVariable, Pretendard_Variable, PretendardVariable-Regular, Pretendard-SemiBold, Pretendard-Light, Pretendard-ExtraBold, Pretendard-Medium",
    montserrat: "Montserrat",
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    bold: "700",
  },
  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
};
