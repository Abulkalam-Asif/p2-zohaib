import React, { useState } from 'react';
import Button2 from './Button2';
import Image from 'next/image';
import Dropzone from './Dropzone';
import ColorsContainer from './ColorsContainer';
import { useThemeColorContext } from '../contexts/ThemeColorContext';

const BackgroundSelect = ({ label, description, idHtmlFor, name, isChecked, backgroundImage, onChangeHandler, isColorsContainerVisible, colorsContainerToggleHandler }) => {
  const { themeColor, themeColorHandler } = useThemeColorContext()

  const [themePreviewBoxBg, setThemePreviewBoxBg] = useState("bg-themeColor1Base");
  const [tempThemeColor, setTempThemeColor] = useState("themeColor1");

  const themeColorChangeLocalHandler = () => {
    if (label === "color") {
      themeColorHandler(tempThemeColor);
    }
  }

  return (
    <label htmlFor={idHtmlFor} className={`cursor-pointer flex gap-x-2 pl-6 pr-14 py-4 border-2 rounded-xl ${isChecked ? `${themeColor.border.base} ${themeColor.bg.lightest}` : "border-themeColor0Base bg-white "}`}>
      <div>
        <input checked={isChecked} type="radio" name={name} id={idHtmlFor} onChange={() => onChangeHandler(label)} className={`cursor-pointer ${themeColor.accent.dark}`} />
      </div>
      <div className='space-y-4'>
        <h3 className='font-bold capitalize'>{label}</h3>
        <p className='font-medium text-themeColor0Base'>{description}</p>
        <div className='h-60 relative'>
          {backgroundImage ?
            <div className='rounded-xl h-full w-full overflow-hidden'>
              <Dropzone title={'Choose an Image'} content={<>
                <Image src={backgroundImage} alt='background image' className='rounded-xl h-full w-full object-cover' />
              </>} />
            </div>
            :
            <>
              <div className='rounded-xl overflow-hidden h-60'>
                <button onClick={colorsContainerToggleHandler} title='Choose a Background Color' className={`block w-full h-full ${themePreviewBoxBg.background} font-bold text-white`}>
                  Your background color
                </button>
              </div>
              {isColorsContainerVisible &&
                <ColorsContainer colorsContainerToggleHandler={colorsContainerToggleHandler} setThemePreviewBoxBg={setThemePreviewBoxBg} setTempThemeColor={setTempThemeColor} />
              }
            </>
          }
        </div>
        <Button2 onClick={themeColorChangeLocalHandler} text={`Change ${label}`} isDisabled={!isChecked} />
      </div>
    </label>
  );
}

export default BackgroundSelect;