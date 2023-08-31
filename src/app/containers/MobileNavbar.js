import React from 'react'
import Navitem from '../components/Navitem'
import LinkButton from '../components/LinkButton'


const MobileNavbar = ({ isMobNavbarOut }) => {

  return (
    <nav className={`hidden md:block bg-white fixed w-full ${isMobNavbarOut ? "top-0" : "-top-full"} transition-all duration-500 left-0 right-0 z-10 pt-24 overflow-y-auto`}>
      <ul className="flex flex-col items-start">
        <Navitem text={"Product"} dropdownAlignment={"right"} dropdownItems={[{
          text: "Features",
          href: "#",
          imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/6070b3119575ba8abea6dafa_tools_nav.webp"
        },
        {
          text: "Employee Intranet",
          href: "#",
          imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/640b45eecaf87ff9103edb95_file-cabinet-emoji.webp"
        },
        {
          text: "Integrations",
          href: "#",
          imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/6070b30e206a080091d988af_shuffle_nav.webp"
        }]} />
        <Navitem text={"Pricing"} isLink={true} href={"#"} />
        <Navitem text={"Solutions"} dropdownItems={[{
          text: "Company-wide",
          href: "#",
          imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/6070b30e0276c7610246c12b_briefcase_nav.webp"
        }, {
          text: "Internal communications",
          href: "#",
          imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/6070b30eaa48857928a7dc11_speechbubble_nav.webp"
        },
        {
          text: "Remote work",
          href: "#",
          imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/6070b30e8f48035061de683d_laptop_nav.webp"
        },
        {
          text: "Sales teams",
          href: "#",
          imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/6070b30ef2177807ece3c3f6_chart_nav.webp"
        }]} />
        <Navitem text={"Resources"} dropdownAlignment={"left"} dropdownItems={[
          {
            text: "Free templates",
            href: "#",
            imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/60edcc3708e9c18739953dec_%F0%9F%9A%80%402x.png"
          }, {
            text: "Glossary",
            href: "#",
            imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/61040e791548342f6118a4d5_Glossary%20nav%20icon%402x.webp"
          }, {
            text: "Guides",
            href: "#",
            imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/61040e7ba1c2b531887764af_Guides%20nav%20icon%402x.webp"
          }, {
            text: "Blog",
            href: "#",
            imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/61040e7dc6e2b652a2e9316d_Blog%20nav%20icon%402x.webp"
          }, {
            text: "Developers",
            href: "#",
            imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/61040e7b078bd44e5040abfc_Dev%20Network%20nav%20icon%402x.webp"
          }, {
            text: "Help center",
            href: "#",
            imgSrc: "https://assets-global.website-files.com/5d8d029013ffd80bbb91320d/61040e7e0772f82468f945eb_Help%20center%20nav%20icon%402x.webp"
          }
        ]} />
        <Navitem text={"Enterprise"} isLink={true} href={"#"} />
      </ul>
      <hr className='my-4' />
      <div className='grid grid-cols-2 gap-x-2 p-4 pb-10'>
        <LinkButton text={"Log in"} type='outlined' />
        <LinkButton text={"Sign up"} />
      </div>
    </nav>
  )
}

export default MobileNavbar
