import React from 'react'
import Header2Box from '../components/Header2Box'
import H1 from '../components/H1'
import LinkButton from '../components/LinkButton'

const Header2 = () => {

  return (
    <>
      <section className='w-full bg-themeColorExtraLight'>
        <div className='max-w-8xl mx-auto py-12 px-8 grid grid-cols-5 gap-8 xl:grid-cols-4 lg:grid-cols-1 items-stretch justify-stretch'>
          <div className='col-span-2 flex flex-col items-start justify-center gap-y-8 lg:items-center'>
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
              <H1 text={"AI-powered knowledge management for instant answers"} />
            </div>
            <div>
              <LinkButton text={"Book a demo"} size="large" hasIcon={true} href={"#"} />
            </div>
          </div>
          <div className='col-span-3 xl:col-span-2'>
            <iframe
              className='w-full h-full min-h-[400px] sm:min-h-[300px] xs:min-h-[200px]'
              src="https://www.youtube.com/embed/D0UnqGm_miA"
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header2