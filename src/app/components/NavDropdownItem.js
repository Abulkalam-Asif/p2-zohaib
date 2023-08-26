import React from 'react'

const NavDropdownItem = ({ href, text }) => {
  return (
    <>
      <li>
        <a
          className="font-semibold inline-block pl-4 pr-4 py-2 hover:text-themeColor hover:pl-5 hover:pr-3 transition-all duration-200"
          href={href}>
          {text}
        </a>
      </li>
    </>
  )
}

export default NavDropdownItem