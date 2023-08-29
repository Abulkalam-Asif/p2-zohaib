"use client"
import React, { useState } from 'react'

const InputBox2 = ({ nameIdHtmlFor, type = "text", label = "", required = true, onChange, value }) => {
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
        <label className='font-semibold mb-1 text-sm' htmlFor={nameIdHtmlFor}>{`${label}${required && "*"}`}</label>
        <div>
          <input onChange={onChange} value={value} className='block w-full text-sm font-medium outline-none border-b-2 border-b-themeColorLight' required={required} onFocus={inputFocusHandler} onBlur={inputBlurHandler} type={type} name={nameIdHtmlFor} id={nameIdHtmlFor} />
          <div className={`h-0.5 -my-0.5 mx-auto bg-black transition-all duration-300 ${isInputFocused ? "w-full" : "w-0"}`}></div>
        </div>
      </div >
    </>
  )
}

export default InputBox2