// BackgroundSelect.js
import React, { useState } from 'react';
import Button2 from './Button2';
import Image from 'next/image';

const BackgroundSelect = ({ label, description, idHtmlFor, name, isChecked, backgroundImage, onChangeHandler }) => {

  return (
    <label htmlFor={idHtmlFor} className={`cursor-pointer flex gap-x-2 pl-6 pr-14 py-4 border-2 rounded-xl ${isChecked ? "border-themeColor bg-themeColorExtraLight" : "border-themeColor2 bg-white "}`}>
      <div>
        <input checked={isChecked} type="radio" name={name} id={idHtmlFor} onChange={() => onChangeHandler(label)} className='cursor-pointer' />
      </div>
      <div className='space-y-4'>
        <h3 className='font-bold capitalize'>{label}</h3>
        <p className='font-medium text-themeColor2'>{description}</p>
        <div className='rounded-xl overflow-hidden h-60'>
          {backgroundImage ?
            <Image
              src={backgroundImage} alt='background image' />
            :
            <button className='block w-full h-full bg-themeColor font-bold text-white'>
              Your background color
            </button>
          }
        </div>
        <Button2 text={`Change ${label}`} isDisabled={!isChecked} />
      </div>
    </label>
  );
}

export default BackgroundSelect;



