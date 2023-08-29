import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ChatMessageDisplay = ({ header, timeAgo, message, isChatExpanded }) => {
  return (
    <>
      <div className={`grid transition-all px-7 duration-300 ${isChatExpanded ? "grid-rows-[1fr] py-5 bg-white shadow-3xl rounded-xl" : "grid-rows-[0fr] delay-200"}`}>
        <div className='overflow-hidden'>
          <div className='flex items-center gap-x-2 text-sm font-medium text-themeColor2'>
            <span>{header}</span>
            <FontAwesomeIcon icon={faCircle} width={4} />
            <span>{timeAgo}</span>
          </div>
          <p className='font-medium mt-3'>{message}</p>
        </div>
      </div>
    </>
  )
}

export default ChatMessageDisplay