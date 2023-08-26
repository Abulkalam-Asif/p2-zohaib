"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import DesktopNavbar from './DesktopNavbar'
import LinkButton from '../components/LinkButton'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import MobileNavbar from './MobileNavbar'

const Header = () => {
  const [isMobNavbarOut, setIsMobNavbarOut] = useState(false);

  useEffect(() => {
    if (isMobNavbarOut) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMobNavbarOut])

  return (
    <>
      <header className='sticky top-0 w-full bg-themeColorExtraLight z-20'>
        <div className='max-w-8xl mx-auto py-6 flex items-center gap-x-8 px-4 lg:gap-x-4'>
          <div>
            <Link href={"/"}>
              <Image
                src="https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/5ef1f340d1a59cdf49926d8e_Guru%20logo.svg"
                width={48}
                priority
                height={48}
                alt="Logo"
              />
            </Link>
          </div>
          <div className='w-full flex justify-between items-center md:justify-end md:gap-x-4'>
            <DesktopNavbar />
            <div className="space-x-4 lg:space-x-2">
              <LinkButton className='md:hidden' text={"Take a tour"} href={"#"} />
              <LinkButton text={"Book a demo"} href={"#"} type={"outlined"} />
            </div>
            <div className='hidden md:block'>
              <button className='p-1' onClick={() => (setIsMobNavbarOut((prevState) => !prevState))}>
                <FontAwesomeIcon icon={isMobNavbarOut ? faX : faBars} width={"28px"} height={"28px"} className='text-black w-7 h-7' />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNavbar isMobNavbarOut={isMobNavbarOut} />
    </>
  )
}

export default Header