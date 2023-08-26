import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'
import LinkButton from '../components/LinkButton'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <header className='sticky top-0 max-w-8xl mx-auto py-6 flex items-center gap-x-8 px-4 lg:gap-x-4'>
        <div>
          <Link href={"/"}>
            <Image
              src="https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/5ef1f340d1a59cdf49926d8e_Guru%20logo.svg"
              width={48}
              height={48}
              alt="Logo"
            />
          </Link>
        </div>
        <div className='w-full flex justify-between items-center'>
          <Navbar />
          <div className="space-x-4 lg:space-x-2">
            <LinkButton text={"Take a tour"} href={"#"} />
            <LinkButton text={"Book a demo"} href={"#"} type={"outlined"} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header