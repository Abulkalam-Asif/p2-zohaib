import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Bookmark = ({ href, name }) => {
  return (
    <>
      <div className='px-4'>
        <a href={href} className='flex flex-col items-center gap-y-3' target='_blank'>
          <FontAwesomeIcon className='bg-white h-5 w-5  rounded-xl p-2' icon={faGoogle} width={16} height={0} />
          <span className='text-white text-sm font-semibold text-center'>{name}</span>
        </a>
      </div>
    </>
  )
}

export default Bookmark