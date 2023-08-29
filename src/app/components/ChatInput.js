import { faSmile } from '@fortawesome/free-regular-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ChatInput = ({ toggleChat }) => {
  return (
    <>
      <div className='bg-white shadow-3xl py-5 px-7 rounded-xl'>
        <div className='relative'>
          <input onFocus={toggleChat} onBlur={toggleChat} type="text" placeholder='Write a reply...' className='min-w-[15rem] w-full block pr-14 font-medium' />
          <div className='absolute right-0 top-1/2 -translate-y-1/2 space-x-2 text-themeColor2'>
            <button onFocus={toggleChat} onBlur={toggleChat} className='hocus:text-black'>
              <FontAwesomeIcon icon={faSmile} />
            </button>
            <button onFocus={toggleChat} onBlur={toggleChat} className='hocus:text-black'>
              <FontAwesomeIcon icon={faLink} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatInput