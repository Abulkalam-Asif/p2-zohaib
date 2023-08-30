"use client"
import React, { useState } from 'react'

const InputBox2 = ({ nameIdHtmlFor, type = "text", label = "", placeholder, required = true, onChange, value }) => {

  return (
    <>
      <div className='flex flex-col relative'>
        <label className='font-semibold mb-1' htmlFor={nameIdHtmlFor}>{label}</label>
        <div>
          <input onChange={onChange} value={value || ""} className='block w-full font-medium border-2 border-themeColor0Lighter rounded-md py-3 px-4' placeholder={placeholder} required={required} type={type} name={nameIdHtmlFor} id={nameIdHtmlFor} />
        </div>
      </div >
    </>
  )
}

export default InputBox2