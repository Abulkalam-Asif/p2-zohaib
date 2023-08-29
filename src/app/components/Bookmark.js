import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Bookmark = ({ href, title, id, removeBookmarkHandler }) => {
  const [isBookmarkHovered, setIsBookmarkHovered] = useState(false)
  const toggleRemoveButton = () => {
    setIsBookmarkHovered((prevState) => !prevState);
  }
  return (
    <>
      <a onMouseOver={toggleRemoveButton} onMouseOut={toggleRemoveButton} href={href} className={`relative flex flex-col items-center gap-y-3 hocus:bg-themeColorMedium p-4 rounded-xl`} target='_blank'>
        <button onClick={(e) => removeBookmarkHandler(e, id)} className={`${isBookmarkHovered ? "block" : "hidden"} absolute hocus:bg-themeColor rounded-md top-2 right-2 px-2`}>
          <FontAwesomeIcon icon={faX} width={10} height={10} className='text-white' />
        </button>
        <FontAwesomeIcon className='bg-white h-5 w-5  rounded-xl p-2' icon={faGoogle} width={16} height={0} />
        <span className='text-white text-sm font-semibold text-center'>{title}</span>
      </a>
    </>
  )
}

export default Bookmark