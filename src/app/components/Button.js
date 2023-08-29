import React from 'react'

const Button = ({ text, onClick, size = "medium" }) => {
  let sizeStyles = "";
  if (size === "medium") {
    sizeStyles = "text-sm p-4 font-semibold"
  } else if (size === "small") {
    sizeStyles = "text-sm px-3 py-2 font-semibold"
  }
  return (
    <>
      <button onClick={onClick} className={`cursor-pointer text-center rounded-full transition-all duration-200 whitespace-nowrap bg-black text-white border-2 border-black hocus:bg-white hocus:text-black ${sizeStyles}`}>{text}</button>
    </>
  )
}

export default Button