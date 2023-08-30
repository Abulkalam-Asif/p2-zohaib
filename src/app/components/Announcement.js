import { faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Announcement = ({ heading, description, timeAgo }) => {
  return (
    <>
      <div className='space-y-2'>
        <h4 className='font-semibold flex items-center gap-x-2'>
          <FontAwesomeIcon icon={faCircle} size="2xs" width={10} className='text-orange-600' />
          <span>{heading}</span>
        </h4>
        <p className='font-medium'>{description}</p>
        <div className='flex items-center gap-x-3 text-themeColor0Base'>
          <FontAwesomeIcon icon={faUserCircle} size="1x" width={16} />
          <span>{timeAgo}</span>
        </div>
      </div>
    </>
  )
}

export default Announcement