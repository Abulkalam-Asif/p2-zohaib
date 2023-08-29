"use client"
import HomeSearchBar from '@/app/components/HomeSearchBar';
import Announcements from '@/app/containers/Announcements';
import BookmarksDiv from '@/app/containers/BookmarksDiv';
import { useSidebarContext } from '@/app/contexts/SidebarContext';
import React, { useState } from 'react'

const Page = () => {
  const { isSidebarOut } = useSidebarContext();
  const [myBookmarks, setMyBookmarks] = useState([
    { bookmarkName: "Gmail", bookmarkUrl: "https://mail.google.com/mail/u/0/" },
    { bookmarkName: "Google Calender", bookmarkUrl: "https://calendar.google.com/calendar/u/0/r?pli=1" }
  ])
  const [companyBookmarks, setCompanyBookmarks] = useState([])

  return (
    <>
      <div className={`min-h-screen bg-themeColor transition-all pt-20 pb-10 pr-8 ${isSidebarOut ? "pl-72 duration-100" : "pl-0 delay-200 duration-400"}`}>
        <div className='max-w-[1000px] mx-auto space-y-16 relative'>
          <div className='space-y-8'>
            <h1 className='text-6xl font-medium text-center text-white'>Good Morning, John</h1>
            <HomeSearchBar />
          </div>
          <BookmarksDiv heading={"My Bookmarks"} bookmarks={myBookmarks} setBookmarks={setMyBookmarks} />
          <BookmarksDiv heading={"Company Bookmarks"} bookmarks={companyBookmarks} setBookmarks={setCompanyBookmarks} />
          <Announcements />
        </div>
      </div>
    </>
  )
}

export default Page