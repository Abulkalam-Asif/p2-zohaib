import React from 'react'
import Button from './Button'
import InputBox from './InputBox'

const BookDemoForm = () => {
  return (
    <>
      <form className='bg-white rounded-2xl p-8 flex flex-col gap-y-12 w-2/5 lg:w-1/2 md:w-full'>
        <InputBox label={"Work email"} nameIdHtmlFor="email" type={"email"} />
        <InputBox label={"How did you hear about Guru?"} nameIdHtmlFor="message" />
        <Button text={"Book a demo"} />
      </form>
    </>
  )
}

export default BookDemoForm