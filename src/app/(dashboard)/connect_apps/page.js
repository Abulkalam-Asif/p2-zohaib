"use client"
import React from 'react'
import Notice from '@/app/components/Notice';
import AppsTabs from '@/app/containers/AppsTabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSidebarContext } from '@/app/contexts/SidebarContext';

const Page = () => {
  const { isSidebarOut } = useSidebarContext();

  return (
    <>
      <div className={`flex-1 transition-all delay-100 duration-300 ${isSidebarOut ? "ml-72" : "ml-0"}`}>
        <div className='max-w-4xl mx-auto mt-20 mb-10 space-y-8'>
          <div>
            <h1 className='text-xl font-bold'>Connect Your Data Sources</h1>
          </div>
          <Notice />
          <AppsTabs />
          <div>
            <button disabled={true} className={`flex items-center gap-x-2 py-2 px-4 rounded-md font-semibold border text-zinc-400 bg-themeColorLight border-themeColorLight`}>
              <span>
                Continue
              </span>
              <FontAwesomeIcon icon={faChevronRight} size='sm' width={16} height={14} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page