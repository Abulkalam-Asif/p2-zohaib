import React from 'react'
import { useThemeColorContext } from '../contexts/ThemeColorContext'

const Toggle = ({ isChecked, onChangeHandler, id }) => {
  const { themeColor } = useThemeColorContext();

  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" id={id} className="sr-only peer" checked={isChecked} onChange={onChangeHandler} />
        <div className={`w-12 h-4 bg-themeColor0Light rounded-full peer peer-checked:after:left-6 after:-top-1 after:content-[''] after:absolute after:left-0 ${themeColor.bg.after.dark} after:rounded-full after:h-6 after:w-6 after:transition-all ${themeColor.bg.peerChecked.base}`}></div>
      </label>
    </>
  )
}

export default Toggle