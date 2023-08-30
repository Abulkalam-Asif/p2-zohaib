"use client"
import React, { createContext, useContext, useState } from 'react';

const ThemeColorContext = createContext();

export function ThemeColorProvider({ children }) {
  const [themeColor, setThemeColor] = useState({
    text: {
      "dark": "text-themeColor1Dark",
      "base": "text-themeColor1Base",
      "light": "text-themeColor1Light",
      "lighter": "text-themeColor1Lighter",
      "lightest": "text-themeColor1Lightest",
      "hocus": {
        "dark": "hocus:text-themeColor1Dark",
        "base": "hocus:text-themeColor1Base",
        "light": "hocus:text-themeColor1Light",
        "lighter": "hocus:text-themeColor1Lighter",
        "lightest": "hocus:text-themeColor1Lightest",
      }
    },
    bg: {
      "dark": "bg-themeColor1Dark",
      "base": "bg-themeColor1Base",
      "light": "bg-themeColor1Light",
      "lighter": "bg-themeColor1Lighter",
      "lightest": "bg-themeColor1Lightest",
      "hocus": {
        "dark": "hocus:bg-themeColor1Dark",
        "base": "hocus:bg-themeColor1Base",
        "light": "hocus:bg-themeColor1Light",
        "lighter": "hocus:bg-themeColor1Lighter",
        "lightest": "hocus:bg-themeColor1Lightest",
      },
      "peerChecked": {
        "base": "peer-checked:bg-themeColor1Base",
      },
      "after": {
        "dark": "after:bg-themeColor1Dark",
      }
    },
    border: {
      "dark": "border-themeColor1Dark",
      "base": "border-themeColor1Base",
      "light": "border-themeColor1Light",
      "lighter": "border-themeColor1Lighter",
      "lightest": "border-themeColor1Lightest",
      "hocus": {
        "dark": "hocus:border-themeColor1Dark",
        "base": "hocus:border-themeColor1Base",
        "light": "hocus:border-themeColor1Light",
        "lighter": "hocus:border-themeColor1Lighter",
        "lightest": "hocus:border-themeColor1Lightest",
      }
    },
    accent: {
      "dark": "accent-themeColor1Dark",
      "base": "accent-themeColor1Base",
      "light": "accent-themeColor1Light",
      "lighter": "accent-themeColor1Lighter",
      "lightest": "accent-themeColor1Lightest",
    }
  })

  const themeColorHandler = (themeColor) => {
    setThemeColor({
      text: {
        "dark": `text-${themeColor}Dark`,
        "base": `text-${themeColor}Base`,
        "light": `text-${themeColor}Light`,
        "lighter": `text-${themeColor}Lighter`,
        "lightest": `text-${themeColor}Lightest`,
        "hocus": {
          "dark": `hocus:text-${themeColor}Dark`,
          "base": `hocus:text-${themeColor}Base`,
          "light": `hocus:text-${themeColor}Light`,
          "lighter": `hocus:text-${themeColor}Lighter`,
          "lightest": `hocus:text-${themeColor}Lightest`,
        }
      },
      bg: {
        "dark": `bg-${themeColor}Dark`,
        "base": `bg-${themeColor}Base`,
        "light": `bg-${themeColor}Light`,
        "lighter": `bg-${themeColor}Lighter`,
        "lightest": `bg-${themeColor}Lightest`,
        "hocus": {
          "dark": `hocus:bg-${themeColor}Dark`,
          "base": `hocus:bg-${themeColor}Base`,
          "light": `hocus:bg-${themeColor}Light`,
          "lighter": `hocus:bg-${themeColor}Lighter`,
          "lightest": `hocus:bg-${themeColor}Lightest`,
        },
        "peerChecked": {
          "base": `peer-checked:bg-${themeColor}Base`,
        },
        "after": {
          "dark": `after:bg-${themeColor}Dark`,
        }
      },
      border: {
        "dark": `border-${themeColor}Dark`,
        "base": `border-${themeColor}Base`,
        "light": `border-${themeColor}Light`,
        "lighter": `border-${themeColor}Lighter`,
        "lightest": `border-${themeColor}Lightest`,
        "hocus": {
          "dark": `hocus:border-${themeColor}Dark`,
          "base": `hocus:border-${themeColor}Base`,
          "light": `hocus:border-${themeColor}Light`,
          "lighter": `hocus:border-${themeColor}Lighter`,
          "lightest": `hocus:border-${themeColor}Lightest`,
        }
      },
      accent: {
        "dark": `accent-${themeColor}Dark`,
        "base": `accent-${themeColor}Base`,
        "light": `accent-${themeColor}Light`,
        "lighter": `accent-${themeColor}Lighter`,
        "lightest": `accent-${themeColor}Lightest`,
      }
    })
  };

  return (
    <ThemeColorContext.Provider value={{ themeColor, themeColorHandler }}>
      {children}
    </ThemeColorContext.Provider>
  );
}

export function useThemeColorContext() {
  return useContext(ThemeColorContext);
}