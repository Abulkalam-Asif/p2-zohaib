"use client"
import React, { useState } from 'react'
import Announcement from '../components/Announcement'

const Announcements = () => {
  const [areAnnouncementsExpended, setAreAnnouncementsExpended] = useState(false);
  const toggleAnnouncements = () => {
    setAreAnnouncementsExpended((prevState) => !prevState);
  }

  return (
    <>
      <div className='bg-white rounded-xl py-4'>
        <div className='px-6 py-4 border-b-2 border-themeColor0Lighter'>
          <h2 className='text-lg text-black font-semibold'>Announcements</h2>
        </div>
        <div className='px-6 py-4 mb-4'>
          <Announcement heading={"Good job team"} description={"We made our revenue quota this week."} timeAgo={"7 days ago"} />
          <div className={`grid transition-all duration-300 ${areAnnouncementsExpended ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
            <div className='overflow-hidden space-y-4'>
              <Announcement
                heading={"New Feature Release"}
                description={"We're excited to announce a new feature in our application that will enhance your experience!"}
                timeAgo={"2 hours ago"}
              />

              <Announcement
                heading={"Important Maintenance"}
                description={"Our website will undergo maintenance on August 31st. Please expect temporary downtime."}
                timeAgo={"1 day ago"}
              />

              <Announcement
                heading={"Upcoming Webinar"}
                description={"Join us for a live webinar on the latest trends in web development. Register now!"}
                timeAgo={"5 days ago"}
              />
            </div>
          </div>
        </div>
        <div className='mx-6 mb-4'>
          <button className='border-2 border-themeColor0Base rounded-lg px-6 py-2 font-semibold' onClick={toggleAnnouncements}>{areAnnouncementsExpended ? "Show less" : "See all announcements"}</button>
        </div>
      </div>
    </>
  )
}

export default Announcements