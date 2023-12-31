"use client"
import HomeSearchBar from '@/app/components/HomeSearchBar';
import Announcements from '@/app/containers/Announcements';
import BookmarksDiv from '@/app/containers/BookmarksDiv';
import { useSidebarContext } from '@/app/contexts/SidebarContext';
import { useThemeColorContext } from '@/app/contexts/ThemeColorContext';
import React, { useState } from 'react'

const Page = () => {
  const { themeColor } = useThemeColorContext()

  const { isSidebarOut } = useSidebarContext();
  const [myBookmarks, setMyBookmarks] = useState([
    { bookmarkTitle: "Gmail", bookmarkLink: "https://mail.google.com/mail/u/0/", id: "83e9117a-65f8-4627-9b43-9af751558d49" },
    { bookmarkTitle: "Google Calender", bookmarkLink: "https://calendar.google.com/calendar/u/0/r?pli=1", id: "c3665117-ded9-493f-958c-8c966409abc9" }
  ])
  const [companyBookmarks, setCompanyBookmarks] = useState([])

  return (
    <>
      <div className={`min-h-screen ${themeColor.bg.base} transition-all pt-20 pb-10 pr-8 md:px-12 md:pt-24 md:pb-8 sm:px-6 ${isSidebarOut ? "pl-72 duration-100" : "pl-0 delay-200 duration-400 xl:pl-28"}`}>
        <div className='max-w-[1000px] mx-auto space-y-16 relative sm:space-y-8'>
          <div className='space-y-8'>
            <h1 className='text-6xl font-semibold text-center text-white md:text-4xl sm:text-3xl xs:text-2xl'>Good Morning, John</h1>
            <HomeSearchBar />
          </div>
          <BookmarksDiv heading={"My Bookmarks"} bookmarksList={myBookmarks} setBookmarksList={setMyBookmarks} category={"Personal"} />
          <BookmarksDiv heading={"Company Bookmarks"} bookmarksList={companyBookmarks} setBookmarksList={setCompanyBookmarks} category={"Company"} />
          <Announcements />
        </div>
      </div>
    </>
  )
}

export default Page