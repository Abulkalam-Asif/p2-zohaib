import React from 'react';

const ColorsContainer = ({ colorsContainerToggleHandler, setThemePreviewBoxBg, setTempThemeColor }) => {
  const themeColorsList = [
    ['themeColor1', 'bg-themeColor1Base'],
    ['themeColor2', 'bg-themeColor2Base'],
    ['themeColor3', 'bg-themeColor3Base'],
    ['themeColor4', 'bg-themeColor4Base'],
    ['themeColor5', 'bg-themeColor5Base'],
    ['themeColor6', 'bg-themeColor6Base'],
    ['themeColor7', 'bg-themeColor7Base'],
    ['themeColor8', 'bg-themeColor8Base'],
  ]

  const handleButtonClick = (event) => {
    const selectedBgColor = event.target.getAttribute('data-bg-color');
    setThemePreviewBoxBg(selectedBgColor);

    const selectedThemeColor = event.target.getAttribute('data-theme-color');
    setTempThemeColor(selectedThemeColor);

    colorsContainerToggleHandler();
  };

  return (
    <>
      <div className='absolute shadow-3xl -top-4 -right-4 grid grid-cols-4 gap-4 bg-white p-4 rounded-xl z-[99]'>
        {themeColorsList.map((themeColorItem, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-lg ${themeColorItem[1]} hover:scale-125 transition-all duration-150`}
            data-theme-color={themeColorItem[0]}
            data-bg-color={themeColorItem[1]}
            onClick={handleButtonClick}
          ></button>
        ))}
      </div>
      <div
        onClick={colorsContainerToggleHandler}
        className='fixed top-0 left-0 right-0 bottom-0 z-[90] bg-black opacity-30'
      ></div>
    </>
  );
};

export default ColorsContainer;
