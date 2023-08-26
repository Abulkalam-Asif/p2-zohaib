import React from 'react'
import Navitem from '../components/Navitem'


const Navbar = () => {

  return (
    <nav>
      <ul className="flex items-center">
        <Navitem text={"Product"} dropdownItems={[{
          text: "Features",
          href: "#",
        },
        {
          text: "Employee Intranet",
          href: "#",
        },
        {
          text: "Integrations",
          href: "#",
        }]} />
        <Navitem text={"Pricing"} isLink={true} href={"#"} />
        <Navitem text={"Solutions"} dropdownItems={[{
          text: "Company-wide",
          href: "#",
        }, {
          text: "Internal communications",
          href: "#",
        },
        {
          text: "Remote work",
          href: "#",
        },
        {
          text: "Sales teams",
          href: "#",
        }]} />
        <Navitem text={"Resources"} dropdownItems={[
          {
            text: "Free templates",
            href: "#",
          }, {
            text: "Glossary",
            href: "#",
          }, {
            text: "Guides",
            href: "#",
          }, {
            text: "Blog",
            href: "#",
          }, {
            text: "Developers",
            href: "#",
          }, {
            text: "Help center",
            href: "#",
          }
        ]} />
        <Navitem text={"Enterprise"} isLink={true} href={"#"} />
      </ul>
    </nav>
  )
}

export default Navbar