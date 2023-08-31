import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const LinkButton3 = ({ text, href = "#", icon = null, onClick, isSidebarOut, isMobileSidebarOut }) => {
  return (
    <>
      <div className='flex items-center whitespace-nowrap'>
        <button onClick={onClick} className='md:hidden px-3 py-2 hocus:bg-themeColor0Lighter rounded'>
          <FontAwesomeIcon icon={icon} className='h-5 w-auto' />
        </button>
        <button onClick={onClick} className='fixed top-4 left-4 hidden md:block px-3 py-2 bg-themeColor0Base text-white hover:bg-themeColor0Lighter hover:text-black rounded'>
          <FontAwesomeIcon icon={icon} className='h-7 w-auto' />
        </button>
        <Link href={href} className={`text-lg font-semibold hocus:bg-themeColor0Lighter rounded transition-all overflow-hidden duration-300 ${isSidebarOut ? "w-full px-3 py-1 md:w-0 md:px-0 md:py-0" : "w-0 px-0 py-0 md:w-full md:px-3 md:py-1"}`}>
          {text}
        </Link >
      </div>
    </>
  )
}

export default LinkButton3