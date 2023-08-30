import React from 'react'

const AppsTabsButton = ({ onClick, connectStatus = false }) => {
  return (
    <>
      <button disabled={!connectStatus} onClick={onClick} className={`py-1.5 px-4 mx-auto block w-2/3 rounded-md text-sm font-semibold border ${!connectStatus ? "text-zinc-400 bg-themeColor0Lighter border-themeColor0Lighter" : "text-black bg-white border-themeColor0Base"}`}>{!connectStatus ? "Not available" : "Connect"}</button>
    </>
  )
}

export default AppsTabsButton