"use client"
import Button2 from '@/app/components/Button2';
import { useSidebarContext } from '@/app/contexts/SidebarContext';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import homePreview from "../../assets/dashboard/home_preview.jpg"
import backgroundImage from "../../assets/dashboard/background_image.jpg"
import BackgroundSelect from '@/app/components/BackgroundSelect';
import Toggle from '@/app/components/Toggle';
import Dropzone from '@/app/components/Dropzone';
import { useThemeColorContext } from '@/app/contexts/ThemeColorContext';

const Page = () => {
  const { themeColor } = useThemeColorContext();
  const { isSidebarOut } = useSidebarContext();

  // State and Handler to control the selection of Background Image or Background Color radio box
  const [selectedBackground, setSelectedBackground] = useState("color");
  const selectBackgroundHandler = (selectedOption) => {
    setSelectedBackground(selectedOption);
  }

  // State and Handler to control the visibility of the colors container associated with Choosing a Background Color
  const [isColorsContainerVisible, setisColorsContainerVisible] = useState(false);
  const colorsContainerToggleHandler = () => {
    setisColorsContainerVisible((prevState) => !prevState);
  }
  useEffect(() => {
    if (isColorsContainerVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isColorsContainerVisible]);

  // State and Handler to control the toggle input for the label "Allow users to set their own background"
  const [isAllowUserToggleChecked, setIsAllowUserToggleChecked] = useState(true)
  const allowUserHandler = () => {
    setIsAllowUserToggleChecked((prevState) => !prevState);
  }

  // State and Handler to control the toggle input for the label "Set Dashworks as your team's new tab page"
  const [isSetDashworksHandler, setIsSetDashworksHandler] = useState(true)
  const setDashworksHandler = () => {
    setIsSetDashworksHandler((prevState) => !prevState);
  }

  return (
    <>
      <div className={`min-h-screen transition-all pt-20 pb-10 pr-8 md:px-12 md:pt-24 md:pb-8 sm:px-4 ${isSidebarOut ? "pl-72 duration-100" : "pl-0 delay-200 duration-400"}`}>
        <div className='max-w-[1000px] mx-auto space-y-16 relative'>
          <div className='border-b-2 pb-2 space-y-2'>
            <h1 className='font-bold'>Settings</h1>
            <p className='font-semibold text-themeColor0Base'>Manage and edit your company&rsquo;s information and homepage.</p>
          </div>
          <form className='border-b-2 pb-8'>
            <div className='space-y-2 mb-6'>
              <label htmlFor='companyName' className='font-bold'>Company name</label>
              <input type="text" id='companyName' name='companyName' className='font-medium bg-themeColor0Lighter py-3 px-5 rounded-xl w-full' placeholder='Enter company name (letters, numbers and symbols: @-#_.&~' />
            </div>
            <Button2 text={"Save"} />
          </form>
          <div className='border-b-2 pb-8 space-y-6'>
            <div className='space-y-2'>
              <h2 className='font-bold'>Logo</h2>
              <p className='font-semibold text-themeColor0Base'>Upload a logo that will apear on the top left of Dashworks. If you don&rsquo;t upload a logo, we will use your company name instead.</p>
            </div>
            <div className='flex items-center gap-x-8 gap-y-4 sm:flex-col'>
              <Dropzone title={"Choose your Logo"} content={<>
                <span className="p-8 font-semibold text-themeColor0Base">
                  Your Logo
                </span></>} />
              <Button2 text={"Change logo"} />
            </div>
            <div className={`border p-4 rounded-xl ${themeColor.text.dark} font-medium`}>
              We recommend uploading a square, transparent PNG or JPG cropped to edges of your Logo, at least 80px wide.
            </div>
          </div>
          <div className='border-b-2 pb-8 space-y-6'>
            <div className='space-y-2'>
              <h2 className='font-bold'>Home preview</h2>
              <p className='font-semibold text-themeColor0Base'>Preview your appearance settings on your company&rsquo;s homepage.</p>
            </div>
            <div className='rounded-xl overflow-hidden'>
              <Image width={1000} alt='homePreview' className='w-full h-auto' src={homePreview} />
            </div>
          </div>
          <div className='border-b-2 pb-8 space-y-6'>
            <div className='space-y-2'>
              <h2 className='font-bold'>Default Background</h2>
              <p className='font-semibold text-themeColor0Base'>Customize the look of your homepage. Your team members will see the background if they have not set their own background.</p>
            </div>
            <div className='grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-1'>
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
                isColorsContainerVisible={isColorsContainerVisible}
                colorsContainerToggleHandler={colorsContainerToggleHandler}
              />
            </div>
          </div>
          <div className='border-b-2 pb-8 flex justify-between items-center'>
            <label htmlFor='allowUser' className='space-y-2 cursor-pointer flex-1'>
              <h2 className='font-bold'>Allow users to set their own background</h2>
              <p className='font-semibold text-themeColor0Base'>This lets your team access Dashworks from their browser&rsquo;s new tab page.</p>
            </label>
            <div>
              <Toggle id={"allowUser"} isChecked={isAllowUserToggleChecked} onChangeHandler={allowUserHandler} />
            </div>
          </div>
          <div className='pb-8 flex justify-between items-center'>
            <label htmlFor={"setDashworks"} className='space-y-2 cursor-pointer flex-1'>
              <h2 className='font-bold'>Set Dashworks as your team&rsquo;s new tab page</h2>
              <p className='font-semibold text-themeColor0Base'>Allow user to override the company homepage with their own background.</p>
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