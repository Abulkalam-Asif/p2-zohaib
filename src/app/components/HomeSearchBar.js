import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const HomeSearchBar = () => {
  return (
    <>
      <div>
        <div className='flex items-center gap-x-3 bg-white py-3 px-5 rounded-xl'>
          <FontAwesomeIcon icon={faSearch} className='text-themeColor2' width={16} height={16} />
          <input type="text" className='w-full font-medium' placeholder='Ask anything...' />
        </div>
      </div>
    </>
  )
}

export default HomeSearchBar