import React from 'react'
import H2 from '../components/H2'
import BookDemoForm from '../components/BookDemoForm'
import Image from 'next/image'

const BookDemoSection = () => {
  return (
    <>
      <div className='w-full px-8 sm:px-0 bg-themeColorExtraLight'>
        <div className='max-w-8xl px-16 mx-auto py-24 bg-[url(https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/640a4dd4d5e0e0a24eda9e64_footer-cta_shapes.svg)] bg-no-repeat bg-cover bg-themeColor rounded-2xl flex flex-col items-center gap-y-16 sm:rounded-none xs:px-4 xs:py-16'>
          <div className='relative xs:pl-12'>
            <H2 text={"Book a demo"} />
            <Image src={"https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/640e0c77c796618c93521d0f_cta-footer_arrow.svg"} className='h-28 w-auto absolute -top-8 -left-28 -rotate-18 lg:-left-32 lg:-top-0 md:h-20 md:-left-24 xs:-left-8' width={0} height={0} alt="icon" />
          </div>
          <BookDemoForm />
        </div>
      </div>
    </>
  )
}

export default BookDemoSection