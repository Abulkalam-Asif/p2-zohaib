import React from 'react'
import NavDropdownItem from './NavDropdownItem'

const NavDropdown = ({ ishocused, isClicked, dropdownItems, dropdownAlignment = "center" }) => {
  let dropdownAlignmentClasses = "";
  if (dropdownAlignment === "center") {
    dropdownAlignmentClasses = "right-1/2 translate-x-1/2 md:translate-x-0"
  } else if (dropdownAlignment === "right") {
    dropdownAlignmentClasses = "left-0"
  } else if (dropdownAlignment === "left") {
    dropdownAlignmentClasses = "right-0"
  }
  return (
    <>
      <div className={`absolute rounded-xl w-max bg-white top-full ${dropdownAlignmentClasses} grid ${ishocused || isClicked ? "grid-rows-[1fr] shadow-3xl p-4" : "grid-rows-[0fr]"} transition-all duration-200 md:static md:rounded-none md:w-full md:shadow-none md:pl-8 md:py-0`}>
        <ul className='overflow-hidden grid grid-cols-2 md:grid-cols-1'>
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