import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LinkButton2 = ({ text, href = "#", icon, isSidebarOut, onClick }) => {
  return (
    <>
      <Link onClick={onClick} href={href} className='flex items-center font-medium text-base text-zinc-700 px-3 py-2 hocus:bg-themeColor0Lighter rounded whitespace-nowrap transition-all duration-200'>
        <Image width={0} height={0} src={icon} alt="icon" />
        <div className={`transition-all overflow-hidden duration-300 ${isSidebarOut ? "w-full ml-4 md:w-0 md:ml-0" : "w-0 ml-0 md:w-full md:ml-4"}`}>
          {text}
        </div>
      </Link >
    </>
  )
}

export default LinkButton2