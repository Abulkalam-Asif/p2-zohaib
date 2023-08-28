import React from 'react'
import lockIcon from "../assets/dashboard/lock.svg";
import Image from 'next/image';

const Notice = () => {
  return (
    <>
      <div className='flex gap-x-2 border border-themeColor2 rounded-md p-3'>
        <Image width={0} height={0} src={lockIcon} alt="icon" />
        <p className='text-sm text-zinc-500'>Dashworks respects the permissions in your connected apps by automatically synchronizing document-level permissions. This ensures that your team members can only see documents to which they already have access.</p>
      </div>
    </>
  )
}

export default Notice