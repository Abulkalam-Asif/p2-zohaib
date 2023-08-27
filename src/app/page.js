import React from 'react'
import Header from "./containers/Header"
import Header2 from './containers/Header2'
import NavTop from './containers/NavTop'
import LogosSection from './containers/LogosSection'
import GMDSection from './containers/GMDSection'
import BookDemoSection from './containers/BookDemoSection'

const page = () => {
  return (
    <>
      <NavTop />
      <Header />
      <Header2 />
      <LogosSection />
      <GMDSection />
      <BookDemoSection />
    </>
  )
}

export default page