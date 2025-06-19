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
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
    subtitle: string;
    caption: string;
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
  transitions: {
    default: string;
    fast: string;
    slow: string;
  };
  zIndex: {
    modal: number;
    dropdown: number;
    tooltip: number;
  };
}

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#2D3748",
    primaryGreen: "#2D3748",
    secondary: "#718096",
    danger: "#E53E3E",
    warning: "#DD6B20",
    red: "#E53E3E",
    graphite: "#4A5568",
    lightGray: "#EDF2F7",
    mediumGray: "#A0AEC0",
    darkSlateGray: "#2D3748",
    pureWhite: "#FFFFFF",
    deepBlack: "#1A202C",
    charcoalGray: "#2D3748",
    slateBlue: "#2D3748",
    deepNavy: "#1A202C",
    ashGray: "#718096",
    steelGray: "#4A5568",
    midnightBlack: "#171923",
    darkGray: "#4A5568",
    darkBlue: "#2C5282",
    darkGreen: "#2F855A",
    grayishBlue: "#2C5282",
    grayish: "#718096",
    text: {
      primary: "#1A202C",
      secondary: "#4A5568",
      white: "#FFFFFF",
    },
    background: {
      primary: "#FFFFFF",
      secondary: "#F7FAFC",
      hover: {
        primary: "#EDF2F7",
        secondary: "#E2E8F0",
        danger: "#C53030",
      },
    },
    border: {
      default: "#CBD5E0",
      hover: "#4A5568",
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
    h1: "2.5rem",
    h2: "2rem",
    h3: "1.75rem",
    h4: "1.5rem",
    h5: "1.25rem",
    h6: "1rem",
    subtitle: "1.125rem",
    caption: "0.75rem",
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
  transitions: {
    default: "all 0.2s ease",
    fast: "all 0.1s ease",
    slow: "all 0.3s ease",
  },
  zIndex: {
    modal: 1000,
    dropdown: 100,
    tooltip: 200,
  },
};
