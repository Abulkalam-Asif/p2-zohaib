"use client"
import { useSidebarContext } from '@/app/contexts/SidebarContext';
import React from 'react'

const Page = () => {
  const { isSidebarOut } = useSidebarContext();

  return (
    <>
      <div className={`min-h-screen transition-all pt-20 pb-10 pr-8 ${isSidebarOut ? "pl-72 duration-100" : "pl-0 delay-200 duration-400"}`}>
        <div className='max-w-[1000px] mx-auto space-y-16 relative'>
          content
        </div>
      </div>
    </>
  )
}

export default Page