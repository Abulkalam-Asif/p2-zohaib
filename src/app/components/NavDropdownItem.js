import Image from 'next/image'
import React from 'react'

const NavDropdownItem = ({ href, text, imgSrc }) => {
  return (
    <>
      <li>
        <a
          className="font-semibold flex items-center pl-3 pr-4 py-3 hover:text-themeColor hover:pl-5 hover:pr-2 transition-all duration-200 space-x-3"
          href={href}>
          <Image src={imgSrc} width={16} height={16} alt='icon' />
          <span>{text}</span>
        </a>
      </li>
    </>
  )
}

export default NavDropdownItem