"use client"
import HomeSearchBar from '@/app/components/HomeSearchBar';
import MyBookmarks from '@/app/containers/MyBookmarks';
import { useSidebarContext } from '@/app/contexts/SidebarContext';
import React from 'react'

const Page = () => {
  const { isSidebarOut } = useSidebarContext();

  return (
    <>
      <div className={`min-h-screen bg-themeColor transition-all pt-20 pb-10 pr-8 ${isSidebarOut ? "pl-72 duration-100" : "pl-0 delay-200 duration-300"}`}>
        <div className='max-w-4xl mx-auto space-y-12'>
          <div className='space-y-8'>
            <h1 className='text-4xl font-semibold text-center'>Good Morning, John</h1>
            <HomeSearchBar />
          </div>
          <MyBookmarks />
        </div>
      </div>
    </>
  )
}

export default Page