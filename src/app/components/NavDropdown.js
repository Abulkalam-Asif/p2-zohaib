import React from 'react'
import NavDropdownItem from './NavDropdownItem'

const NavDropdown = ({ isHovered, dropdownItems }) => {
  return (
    <>
      <div className={`absolute rounded-xl w-max top-full right-1/2 translate-x-1/2 grid ${isHovered ? "grid-rows-[1fr] shadow-2xl p-4" : "grid-rows-[0fr]"} transition-all duration-300`}>
        <ul className='overflow-hidden flex flex-col'>
          {
            dropdownItems?.map((item, index) => (
              <NavDropdownItem key={index} text={item.text} href={item.href} />
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default NavDropdown