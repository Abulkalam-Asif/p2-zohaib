"use client"
import React, { createContext, useContext, useState } from 'react';

const ThemeColorContext = createContext();

export function ThemeColorProvider({ children }) {
  const [themeColor, setThemeColor] = useState({
    text: {
      "dark": "text-themeColor8Dark",
      "base": "text-themeColor8Base",
      "light": "text-themeColor8Light",
      "lighter": "text-themeColor8Lighter",
      "lightest": "text-themeColor8Lightest",
      "hocus": {
        "dark": "hocus:text-themeColor8Dark",
        "base": "hocus:text-themeColor8Base",
        "light": "hocus:text-themeColor8Light",
        "lighter": "hocus:text-themeColor8Lighter",
        "lightest": "hocus:text-themeColor8Lightest",
      }
    },
    bg: {
      "dark": "bg-themeColor8Dark",
      "base": "bg-themeColor8Base",
      "light": "bg-themeColor8Light",
      "lighter": "bg-themeColor8Lighter",
      "lightest": "bg-themeColor8Lightest",
      "hocus": {
        "dark": "hocus:bg-themeColor8Dark",
        "base": "hocus:bg-themeColor8Base",
        "light": "hocus:bg-themeColor8Light",
        "lighter": "hocus:bg-themeColor8Lighter",
        "lightest": "hocus:bg-themeColor8Lightest",
      },
      "peerChecked": {
        "base": "peer-checked:bg-themeColor8Base",
      },
      "after": {
        "dark": "after:bg-themeColor8Dark",
      }
    },
    border: {
      "dark": "border-themeColor8Dark",
      "base": "border-themeColor8Base",
      "light": "border-themeColor8Light",
      "lighter": "border-themeColor8Lighter",
      "lightest": "border-themeColor8Lightest",
      "hocus": {
        "dark": "hocus:border-themeColor8Dark",
        "base": "hocus:border-themeColor8Base",
        "light": "hocus:border-themeColor8Light",
        "lighter": "hocus:border-themeColor8Lighter",
        "lightest": "hocus:border-themeColor8Lightest",
      }
    },
    accent: {
      "dark": "accent-themeColor8Dark",
      "base": "accent-themeColor8Base",
      "light": "accent-themeColor8Light",
      "lighter": "accent-themeColor8Lighter",
      "lightest": "accent-themeColor8Lightest",
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