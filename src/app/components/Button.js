import React from 'react'

const Button = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`cursor-pointer text-center text-sm p-4 font-semibold rounded-full transition-all duration-200 whitespace-nowrap bg-black text-white border-2 border-black hover:bg-white hover:text-black`}>{text}</button>
    </>
  )
}

export default Button