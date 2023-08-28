"use client"
import React, { useState } from 'react'
import LinkButton2 from '../components/LinkButton2'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LinkButton3 from '../components/LinkButton3'
import homeIcon from "../assets/dashboard/home.svg";
import settingsIcon from "../assets/dashboard/settings.svg";
import inviteIcon from "../assets/dashboard/invite.svg";
import connectIcon from "../assets/dashboard/connect.svg";
import specialistIcon from "../assets/dashboard/specialist.svg";
import supportIcon from "../assets/dashboard/support.svg";
import logoutIcon from "../assets/dashboard/logout.svg";

const Sidebar = () => {
  const [isSidebarOut, setIsSidebarOut] = useState(true);

  const sidebarHandler = () => {
    setIsSidebarOut((prevState) => !prevState);
  }

  return (
    <>
      <aside className='h-screen w-fit border-r-2 border-r-themeColorLight'>
        <div className='flex flex-col items-stretch h-full py-6'>
          <div className='px-4'>
            <LinkButton3 text={"Dashworks"} icon={faBars} onClick={sidebarHandler} isSidebarOut={isSidebarOut} />
          </div>
          <div className='mt-4 flex-1 flex flex-col gap-y-2 px-4'>
            <LinkButton2 text={"Home"} isSidebarOut={isSidebarOut} icon={homeIcon} />
            <LinkButton2 text={"Settings"} isSidebarOut={isSidebarOut} icon={settingsIcon} />
            <LinkButton2 text={"Connect Apps"} isSidebarOut={isSidebarOut} icon={connectIcon} />
          </div>
          <hr className='border-t-2 border-themeColorLight my-6' />
          <div className='flex flex-col gap-y-2 px-4'>
            <LinkButton2 text={"Invite"} isSidebarOut={isSidebarOut} icon={inviteIcon} />
            <LinkButton2 text={"Talk to a Specialist"} isSidebarOut={isSidebarOut} icon={specialistIcon} />
            <LinkButton2 text={"Support"} isSidebarOut={isSidebarOut} icon={supportIcon} />
            <LinkButton2 text={"Logout"} isSidebarOut={isSidebarOut} icon={logoutIcon} />
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar