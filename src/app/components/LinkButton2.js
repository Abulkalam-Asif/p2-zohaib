import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LinkButton2 = ({ text, href = "#", icon, isSidebarOut }) => {
  return (
    <>
      <Link href={href} className='flex items-center font-medium text-base text-zinc-500 px-3 py-2 hocus:bg-themeColorLight rounded whitespace-nowrap transition-all duration-200'>
        <Image width={0} height={0} src={icon} alt="icon" />
        <div className={`transition-all overflow-hidden duration-300 ${isSidebarOut ? "w-full ml-4" : "w-0 ml-0"}`}>
          {text}
        </div>
      </Link >
    </>
  )
}

export default LinkButton2