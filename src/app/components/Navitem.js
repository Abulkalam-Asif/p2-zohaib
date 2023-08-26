'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, } from "react";
import NavDropdown from "./NavDropdown";

const Navitem = ({
  text,
  icon = null,
  isLink = false,
  className = "",
  href,
  dropdownItems
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = () => {
    setIsClicked((prevState) => !prevState);
  };
  const handleIsHovered = () => {
    setIsHovered((prevState) => !prevState);
  };
  return (
    <>
      <li
        className={`relative cursor-pointer ${className}`}
        onMouseEnter={handleIsHovered}
        onMouseLeave={handleIsHovered}
        onClick={handleIsClicked}>
        {isLink ? (
          <a
            href={href}
            className="text-sm py-4 px-8 lg:px-3">
            {text}
          </a>
        ) : (
          <>
            <span className="flex justify-between items-center text-sm py-4 px-8 lg:px-3">
              <span>{text}</span>
              {icon && (
                <FontAwesomeIcon
                  icon={icon}
                  size="lg"
                  className={`transition-transform duration-200 ${isClicked ? "rotate-180" : "rotate-0"
                    }`}
                />
              )}
            </span>
            <NavDropdown
              isHovered={isHovered}
              // isClicked={isClicked}
              dropdownItems={dropdownItems}
            />
          </>
        )}
      </li>
    </>
  );
};

export default Navitem;