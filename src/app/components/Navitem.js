'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, } from "react";
import NavDropdown from "./NavDropdown";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navitem = ({
  text,
  isLink = false,
  className = "",
  href,
  dropdownItems,
  dropdownAlignment
}) => {
  const [ishocused, setIshocused] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = () => {
    setIsClicked((prevState) => !prevState);
  };
  const handleIshocused = () => {
    if (window.innerWidth > 768) {
      setIshocused((prevState) => !prevState);
    }
  };
  return (
    <>
      <li
        className={`relative w-full cursor-pointer md:font-semibold ${className}`}
        onMouseEnter={handleIshocused}
        onMouseLeave={handleIshocused}
        onClick={handleIsClicked}>
        {isLink ? (
          <a
            href={href}
            className="inline-block w-full text-sm py-4 px-8 lg:px-3 md:px-6 md:text-base">
            {text}
          </a>
        ) : (
          <>
            <span className="flex justify-between items-center text-sm py-4 px-8 lg:px-3 md:px-6 md:text-base">
              <span>{text}</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="lg"
                width={16}
                height={16}
                className={`hidden md:inline-block transition-transform duration-200 ${isClicked ? "rotate-180" : "rotate-0"
                  }`}
              />
            </span>
            <NavDropdown
              ishocused={ishocused}
              isClicked={isClicked}
              dropdownItems={dropdownItems}
              dropdownAlignment={dropdownAlignment}
            />
          </>
        )}
      </li>
    </>
  );
};

export default Navitem;