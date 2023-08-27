import React from 'react'
import Header2Box from '../components/Header2Box'
import H1 from '../components/H1'
import LinkButton from '../components/LinkButton'

const Header2 = () => {
  return (
    <>
      <section className='w-full'>
        <div className='max-w-8xl mx-auto px-16 py-12 flex flex-col items-center justify-center gap-y-6 md:px-12 sm:px-4'>
          <div className='flex gap-x-5 items-center text-xs font-semibold md:gap-x-3 sm:gap-x-1 sm:text-xxs'>
            <Header2Box text={"AI Enterprise search"} />
            <span>+</span>
            <Header2Box text={"Wiki"} />
            <span>+</span>
            <Header2Box text={"Intranet"} />
            <span>+</span>
            <Header2Box text={"Knowledge Base"} />
          </div>
          <div>
            <H1 text={"Trusted, instant answers"} />
          </div>
          <div className='text-center'>
            Surface trusted information wherever your team works. Guru is your single source of truth, built effortlessly.
          </div>
          <div>
            <LinkButton text={"Take a product tour"} size="large" hasIcon={true} href={"#"} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Header2