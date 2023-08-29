"use client"
import Button2 from '@/app/components/Button2';
import { useSidebarContext } from '@/app/contexts/SidebarContext';
import Image from 'next/image';
import React, { useState } from 'react'
import homePreview from "../../assets/dashboard/home_preview.png"
import backgroundImage from "../../assets/dashboard/background_image.png"
import BackgroundSelect from '@/app/components/BackgroundSelect';
import Toggle from '@/app/components/Toggle';

const Page = () => {
  const { isSidebarOut } = useSidebarContext();
  const [selectedBackground, setSelectedBackground] = useState("color");

  const selectBackgroundHandler = (selectedOption) => {
    setSelectedBackground(selectedOption);
  }

  const allowUserHandler = () => {
    setIsAllowUserToggleChecked((prevState) => !prevState);
  }
  const [isAllowUserToggleChecked, setIsAllowUserToggleChecked] = useState(true)

  const [isSetDashworksHandler, setIsSetDashworksHandler] = useState(true)
  const setDashworksHandler = () => {
    setIsSetDashworksHandler((prevState) => !prevState);
  }

  return (
    <>
      <div className={`min-h-screen transition-all pt-20 pb-10 pr-8 ${isSidebarOut ? "pl-72 duration-100" : "pl-0 delay-200 duration-400"}`}>
        <div className='max-w-[1000px] mx-auto space-y-16 relative'>
          <div className='border-b-2 pb-2 space-y-2'>
            <h1 className='text-2xl font-bold'>Settings</h1>
            <p className='font-semibold text-themeColor2'>Manage and edit your company's information and homepage.</p>
          </div>
          <form className='border-b-2 pb-8'>
            <div className='space-y-2 mb-6'>
              <label htmlFor='companyName' className='font-bold text-lg'>Company name</label>
              <input type="text" id='companyName' name='companyName' className='font-medium bg-themeColor2Light py-3 px-5 rounded-xl w-full' placeholder='Enter company name (letters, numbers and symbols: @-#_.&~' />
            </div>
            <Button2 text={"Save"} />
          </form>
          <div className='border-b-2 pb-8 space-y-6'>
            <div className='space-y-2'>
              <h2 className='font-bold text-lg'>Logo</h2>
              <p className='font-semibold text-themeColor2'>Upload a logo that will apear on the top left of Dashworks. If you don't upload a logo, we will use your company name instead.</p>
            </div>
            <div>
              <Button2 text={"Change logo"} />
            </div>
            <div className='border p-4 rounded-xl text-themeColorDark font-medium'>
              We recommend uploading a square, transparent PNG or JPG cropped to edges of your Logo, at least 80px wide.
            </div>
          </div>
          <div className='border-b-2 pb-8 space-y-6'>
            <div className='space-y-2'>
              <h2 className='font-bold text-lg'>Home preview</h2>
              <p className='font-semibold text-themeColor2'>Preview your appearance settings on your company's homepage.</p>
            </div>
            <div className='rounded-xl overflow-hidden'>
              <Image width={1000} alt='homePreview' className='w-full h-auto' src={homePreview} />
            </div>
          </div>
          <div className='border-b-2 pb-8 space-y-6'>
            <div className='space-y-2'>
              <h2 className='font-bold text-lg'>Default Background</h2>
              <p className='font-semibold text-themeColor2'>Customize the look of your homepage. Your team members will see the background if they have not set their own background.</p>
            </div>
            <div className='flex gap-x-4'>
              <BackgroundSelect
                isChecked={selectedBackground === "image"}
                label={"image"}
                description={"Choose or upload an image to appear on your company's homepage"}
                idHtmlFor={"backgroundImage"}
                name={"backgroundSelect"}
                onChangeHandler={selectBackgroundHandler}
                backgroundImage={backgroundImage}
              />
              <BackgroundSelect
                isChecked={selectedBackground === "color"}
                label={"color"}
                description={"Choose a solid background color to appear on your company's homepage"}
                idHtmlFor={"backgroundColor"}
                name={"backgroundSelect"}
                onChangeHandler={selectBackgroundHandler}
              />
            </div>
          </div>
          <div className='border-b-2 pb-8 flex justify-between items-center'>
            <label htmlFor='allowUser' className='space-y-2 cursor-pointer flex-1'>
              <h2 className='font-bold text-lg'>Allow users to set their own background</h2>
              <p className='font-semibold text-themeColor2'>This lets your team access Dashworks from their browser's new tab page.</p>
            </label>
            <div>
              <Toggle id={"allowUser"} isChecked={isAllowUserToggleChecked} onChangeHandler={allowUserHandler} />
            </div>
          </div>
          <div className='border-b-2 pb-8 flex justify-between items-center'>
            <label htmlFor={"setDashworks"} className='space-y-2 cursor-pointer flex-1'>
              <h2 className='font-bold text-lg'>Set Dashworks as your team's new tab page</h2>
              <p className='font-semibold text-themeColor2'>Allow user to override the company homepage with their own background.</p>
            </label>
            <div>
              <Toggle id={"setDashworks"} isChecked={isSetDashworksHandler} onChangeHandler={setDashworksHandler} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page