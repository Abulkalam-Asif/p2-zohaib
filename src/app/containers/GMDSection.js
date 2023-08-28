import React from 'react'
import H2 from '../components/H2'
import GMDBox from '../components/GMDBox'
import img1 from "../assets/GMDImg1.png";
import img2 from "../assets/GMDImg2.png";
import img3 from "../assets/GMDImg3.png";

const GMDSection = () => {
  return (
    <>
      <div className='w-full bg-themeColorExtraLight'>
        <div className='max-w-8xl mx-auto px-8 py-8'>
          <div>
            <H2 text={"Get more done with Guru"} />
          </div>
          <div className='grid px-16 grid-cols-3 gap-x-8 gap-y-12 mt-12 lg:grid-cols-2 md:grid-cols-1 sm:px-4'>
            <GMDBox src={img1} h3={"Get started fast"} text={"Skip the typical time-consuming setup. Connect your favorite tools and get instant AI answers, and let Guru identify trending topics at your company to add to your knowledge base."} />
            <GMDBox src={img2} h3={"Boost productivity"} text={"Wasting time digging for information and interrupting colleagues for answers is a thing of the past. Plus, our Al features make creating content a breeze. Get more done with Guru."} />
            <GMDBox src={img3} h3={"One source of truth"} text={"Built-in verification means your information is up to date and accurate, with Al-powered content recommendations and duplicate detection to improve your content effortlessly."} />
          </div>
        </div>
      </div>
    </>
  )
}

export default GMDSection