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

  return (
    <ThemeColorContext.Provider value={{ themeColor }}>
      {children}
    </ThemeColorContext.Provider>
  );
}

export function useThemeColorContext() {
  return useContext(ThemeColorContext);
}