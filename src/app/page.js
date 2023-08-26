"use client"
import React, { useEffect, useState } from 'react'
import Header from "./containers/Header"
import MobileNavbar from './containers/MobileNavbar'

const page = () => {
  const [isMobNavbarOut, setIsMobNavbarOut] = useState(false);
  useEffect(() => {
    if (isMobNavbarOut) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobNavbarOut])

  return (
    <>
      <Header isMobNavbarOut={isMobNavbarOut} setIsMobNavbarOut={setIsMobNavbarOut} />
      <MobileNavbar isMobNavbarOut={isMobNavbarOut} />
    </>
  )
}

export default page