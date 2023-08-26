import React from 'react'

const LinkButton = ({ text, href, type = "solid", className = "" }) => {
  let typeStyles = "";
  if (type === "solid") {
    typeStyles = "bg-black text-white";
  } else if (type === "outlined") {
    typeStyles = "bg-white text-black";
  }
  return (
    <>
      <a href={href} className={`font-semibold text-center p-4 text-sm border-2 border-black rounded-full  hover:bg-themeColor hover:text-black hover:border-themeColor transition-colors duration-200 lg:p-3 ${typeStyles} ${className}`}>{text}</a>
    </>
  )
}

export default LinkButton