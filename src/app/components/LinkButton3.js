import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const LinkButton3 = ({ text, href = "#", icon = null, onClick, isSidebarOut }) => {
  return (
    <>
      <div className='flex items-center whitespace-nowrap'>
        <button onClick={onClick} className='px-3 py-2 hocus:bg-themeColorLight rounded'>
          <FontAwesomeIcon icon={icon || faHome} className='h-5 w-auto' />
        </button>
        <Link href={href} className={`text-lg font-semibold hocus:bg-themeColorLight rounded transition-all overflow-hidden duration-300 ${isSidebarOut ? "w-full px-3 py-1" : "w-0 px-0 py-0"}`}>
          {text}
        </Link >
      </div>
    </>
  )
}

export default LinkButton3