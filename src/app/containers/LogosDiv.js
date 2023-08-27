import Image from 'next/image'
import React from 'react'
import g2_logo from '../assets/g2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const LogosDiv = () => {
  const logosLinks = [{
    src: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/648349983a79e6ead0e9990a_open-ai.svg",
    alt: "OpenAI logo",
  }, {
    src: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/64834998d4dc09048cf0b7a8_shopify.svg",
    alt: "Shopify logo"
  }, {
    src: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/64834998d210b5fccf39afc2_generac.svg",
    alt: "Generac logo"
  }, {
    src: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/64834998f00f5c9c4a96fef0_slack.svg",
    alt: "Slack logo"
  }, {
    src: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/64834998f5698bd0b1412b17_spotify.svg",
    alt: "Spotify logo"
  }, {
    src: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/64834998a233e95b005d1b7c_accenture.svg",
    alt: "Accenture logo",
  }
  ]
  return (
    <>
      <div className='flex justify-between items-center lg:flex-col gap-y-8'>
        <div className='flex'>
          <div className='border-r-2 border-r-logosColor pr-4 mr-4 h-8 xl:h-7'>
            <Image src={g2_logo} height={0} width={0} alt='G2 logo' className='w-auto h-full' />
          </div>
          <div className='flex items-center text-logosColor h-8 xl:h-7'>
            {
              Array.from({ length: 4 }, (_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className='w-auto h-2/3' />
              ))
            }
            <FontAwesomeIcon icon={faStarHalf} className='w-auto h-2/3' />
            <span className='font-bold'>4.5/5</span>
          </div>
        </div>
        <div className='flex gap-x-8 md:grid md:grid-cols-3 md:gap-y-6 sm:grid-cols-2'>
          {logosLinks.map((logo, index) => (
            <div key={index} className='h-7 xl:h-6'>
              <Image src={logo.src} alt={logo.alt} height={0} width={0} className='w-auto h-full object-cover' loading='lazy' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LogosDiv