import React from 'react'
import { useThemeColorContext } from '../contexts/ThemeColorContext';

const Button2 = ({ text, onClick, type, styleType = "filled", isDisabled = false }) => {
  const { themeColor } = useThemeColorContext();

  let styleTypeStyles = "";
  if (styleType === "filled") {
    if (isDisabled) {
      styleTypeStyles = "bg-themeColor0Lighter text-themeColor0Base border-2 border-themeColor0Lighter";
    } else {
      styleTypeStyles = `${themeColor.bg.base} text-white border-2 ${themeColor.border.base} ${themeColor.bg.hocus.dark} ${themeColor.border.hocus.dark}`;
    }
  } else if (styleType === "outlined") {
    styleTypeStyles = "bg-white text-themeColor0Base border-2 border-themeColor0Base";
  }

  return (
    <>
      <button disabled={isDisabled} type={type} onClick={onClick} className={`text-center px-5 py-3 font-semibold rounded-xl transition-all duration-200 whitespace-nowrap ${styleTypeStyles}`}>{text}</button>
    </>
  )
}

export default Button2