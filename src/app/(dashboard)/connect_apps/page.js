"use client"
import React from 'react'
import Notice from '@/app/components/Notice';
import AppsTabs from '@/app/containers/AppsTabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSidebarContext } from '@/app/contexts/SidebarContext';
import ChatContainer from '@/app/containers/ChatContainer';

const Page = () => {
  const { isSidebarOut } = useSidebarContext();

  return (
    <>
      <div className={`min-h-screen transition-all pt-20 pb-10 pr-8 ${isSidebarOut ? "pl-72 duration-100" : "pl-0 delay-200 duration-300"}`}>
        <div className='max-w-4xl mx-auto space-y-8'>
          <div>
            <h1 className='text-xl font-bold'>Connect Your Data Sources</h1>
          </div>
          <Notice />
          <AppsTabs />
          <div>
            <button disabled={true} className={`flex items-center gap-x-2 py-2 px-4 rounded-md font-semibold border text-zinc-400 bg-themeColor0Lighter border-themeColor0Lighter`}>
              <span>
                Continue
              </span>
              <FontAwesomeIcon icon={faChevronRight} size='sm' width={16} height={14} />
            </button>
          </div>
        </div>
        <ChatContainer />
      </div>
    </>
  )
}

export default Page