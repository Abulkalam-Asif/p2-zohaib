import React from 'react'

const Toggle = ({ isChecked, onChangeHandler, id }) => {
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" id={id} className="sr-only peer" checked={isChecked} onChange={onChangeHandler} />
        <div className="w-12 h-4 bg-gray-200 rounded-full peer peer-checked:after:left-6 after:-top-1 after:content-[''] after:absolute after:left-0 after:bg-themeColorDark after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-themeColor"></div>
      </label>
    </>
  )
}

export default Toggle