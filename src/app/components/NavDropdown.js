import React from 'react'
import NavDropdownItem from './NavDropdownItem'

const NavDropdown = ({ isHovered, dropdownItems, dropdownAlignment = "center" }) => {
  let dropdownAlignmentClasses = "";
  if (dropdownAlignment === "center") {
    dropdownAlignmentClasses = "right-1/2 translate-x-1/2"
  } else if (dropdownAlignment === "right") {
    dropdownAlignmentClasses = "left-0"
  } else if (dropdownAlignment === "left") {
    dropdownAlignmentClasses = "right-0"
  }
  return (
    <>
      <div className={`absolute rounded-xl w-max top-full ${dropdownAlignmentClasses} grid ${isHovered ? "grid-rows-[1fr] shadow-2xl p-4" : "grid-rows-[0fr]"} transition-all duration-300`}>
        <ul className='overflow-hidden grid grid-cols-2'>
          {
            dropdownItems?.map((item, index) => (
              <NavDropdownItem key={index} text={item.text} href={item.href} imgSrc={item.imgSrc} />
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default NavDropdown