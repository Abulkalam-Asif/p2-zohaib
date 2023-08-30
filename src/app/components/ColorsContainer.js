import React from 'react';

const ColorsContainer = ({ colorsContainerToggleHandler, setThemePreviewBoxBg }) => {
  const themeColorsList = [
    'bg-themeColor1Base',
    'bg-themeColor2Base',
    'bg-themeColor3Base',
    'bg-themeColor4Base',
    'bg-themeColor5Base',
    'bg-themeColor6Base',
    'bg-themeColor7Base',
    'bg-themeColor8Base',
  ]

  const handleButtonClick = (event) => {
    const selectedBgColor = event.target.getAttribute('data-bg-color');
    setThemePreviewBoxBg(selectedBgColor);

    colorsContainerToggleHandler();
  };

  return (
    <>
      <div className='absolute shadow-3xl -top-4 -right-4 grid grid-cols-4 gap-4 bg-white p-4 rounded-xl z-[99]'>
        {themeColorsList.map((themeColorItem, index) => (
          <button
            key={index}
            className={`w-8 h-8 rounded-lg ${themeColorItem} hover:scale-125 transition-all duration-150`}
            data-bg-color={themeColorItem}
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
