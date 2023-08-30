import React from 'react'

const Dropzone = ({ content, title }) => {
  return (
    <>
      <label title={title} htmlFor="dropzone-file" className="flex flex-col items-center justify-center h-full w-auto border-2 rounded-xl cursor-pointer bg-white shadow-3xl hover:scale-105 transition-all">
        {content}
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </>
  )
}

export default Dropzone