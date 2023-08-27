import React from 'react'

const H1 = ({ text }) => {
  return (
    <>
      <h1 className='text-6xl font-bold md:text-5xl lg:text-center'>
        {text}
      </h1>
    </>
  )
}

export default H1