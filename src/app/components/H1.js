import React from 'react'

const H1 = ({ text }) => {
  return (
    <>
      <h1 className='text-6xl font-bold md:text-5xl lg:text-center sm:text-4xl'>
        {text}
      </h1>
    </>
  )
}

export default H1