import React from 'react'

const H1 = ({ text }) => {
  return (
    <>
      <h1 className='text-6xl font-bold text-center md:text-5xl'>
        {text}
      </h1>
    </>
  )
}

export default H1