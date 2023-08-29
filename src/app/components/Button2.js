import React from 'react'

const Button2 = ({ text, onClick, type, styleType = "filled" }) => {
  let styleTypeStyles = "";
  if (styleType === "filled") {
    styleTypeStyles = "bg-themeColor text-white border-2 border-themeColor hocus:bg-themeColorDark hocus:border-themeColorDark";
  } else if (styleType === "outlined") {
    styleTypeStyles = "bg-white text-themeColor2 border-2 border-themeColor2";
  }
  return (
    <>
      <button type={type} onClick={onClick} className={`cursor-pointer text-center px-5 py-3 font-semibold rounded-xl transition-all duration-200 whitespace-nowrap ${styleTypeStyles}`}>{text}</button>
    </>
  )
}

export default Button2