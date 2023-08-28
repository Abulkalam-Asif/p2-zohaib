import React from 'react'
import LinkButton from '../components/LinkButton'

const NavTop = () => {
  return (
    <>
      <nav className='w-full md:hidden bg-themeColorExtraLight'>
        <ul className='max-w-8xl mx-auto px-8 pt-4 pb-4 flex justify-end items-center'>
          <li>
            <LinkButton text={"Sign up"} type='plain' size='small' href={"#"} />
          </li>
          <li className='px-3'>|</li>
          <li>
            <LinkButton text={"Log in"} type='plain' size='small' href={"#"} />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavTop