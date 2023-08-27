import Image from 'next/image'
import React from 'react'
import H3 from './H3'

const GMDBox = ({ src, h3, text }) => {
  return (
    <>
      <div className='flex flex-col gap-y-6'>
        <Image src={src} width={0} height={0} alt='GMD Image' className='w-full h-auto' />
        <div className='space-y-4'>
          <H3 text={h3} />
          <p className='sm:text-sm'>{text}</p>
        </div>
      </div>
    </>
  )
}

export default GMDBox