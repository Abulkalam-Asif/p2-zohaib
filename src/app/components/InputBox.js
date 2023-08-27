"use client"
import React, { useState } from 'react'

const InputBox = ({ nameIdHtmlFor, type = "text", label, required = true }) => {
  const [isInputFocused, setIsInputFocused] = useState(false)

  const inputFocusHandler = (e) => {
    setIsInputFocused((prevState) => !prevState);
  }
  const inputBlurHandler = (e) => {
    setIsInputFocused((prevState) => !prevState);
  }

  return (
    <>
      <div className='flex flex-col relative'>
        <label className='font-semibold mb-2' htmlFor={nameIdHtmlFor}>{`${label}${required && "*"}`}</label>
        <div>
          <input className='block w-full outline-none border-b-2 border-b-themeColorLight' required={required} onFocus={inputFocusHandler} onBlur={inputBlurHandler} type={type} name={nameIdHtmlFor} id={nameIdHtmlFor} />
          <div className={`h-0.5 -my-0.5 mx-auto bg-black transition-all duration-300 ${isInputFocused ? "w-full" : "w-0"}`}></div>
        </div>
      </div >
    </>
  )
}

export default InputBox