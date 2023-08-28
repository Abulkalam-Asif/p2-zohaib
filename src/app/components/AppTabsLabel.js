import React from 'react'

const AppTabsLabel = ({ text, selectedTab, setSelectedTab, label }) => {
  const clickHandler = () => {
    setSelectedTab(label);
  }

  return (
    <>
      <div>
        <button className={`text-sm font-medium hocus:bg-themeColor2Light p-2 `} onClick={clickHandler}>
          {text}
        </button>
        <div className={`h-0.5 my-0 mx-auto bg-black transition-all duration-300 ${selectedTab === label ? "w-full" : "w-0"}`}></div>
      </div>
    </>
  )
}

export default AppTabsLabel