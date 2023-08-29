"use client"
import HomeSearchBar from '@/app/components/HomeSearchBar';
import Announcements from '@/app/containers/Announcements';
import BookmarksDiv from '@/app/containers/BookmarksDiv';
import { useSidebarContext } from '@/app/contexts/SidebarContext';
import React, { useState } from 'react'

const Page = () => {
  const { isSidebarOut } = useSidebarContext();
  const [myBookmarks, setMyBookmarks] = useState([
    { bookmarkTitle: "Gmail", bookmarkLink: "https://mail.google.com/mail/u/0/", id: "83e9117a-65f8-4627-9b43-9af751558d49" },
    { bookmarkTitle: "Google Calender", bookmarkLink: "https://calendar.google.com/calendar/u/0/r?pli=1", id: "c3665117-ded9-493f-958c-8c966409abc9" }
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
          <BookmarksDiv heading={"My Bookmarks"} bookmarksList={myBookmarks} setBookmarksList={setMyBookmarks} category={"Personal"} />
          <BookmarksDiv heading={"Company Bookmarks"} bookmarksList={companyBookmarks} setBookmarksList={setCompanyBookmarks} category={"Company"} />
          <Announcements />
        </div>
      </div>
    </>
  )
}

export default Page