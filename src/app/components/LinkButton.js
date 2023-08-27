import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const LinkButton = ({ text, size = "medium", href, type = "solid", className = "", hasIcon = false }) => {
  let typeStyles = "";
  if (type === "solid") {
    typeStyles = "bg-black text-white border-2 border-black hover:bg-themeColor hover:text-black hover:border-themeColor";
  } else if (type === "outlined") {
    typeStyles = "bg-white text-black border-2 border-black hover:bg-themeColor hover:text-black hover:border-themeColor";
  } else if (type === "plain") {
    typeStyles = "text-black bg-themeColorExtraLight hover:bg-themeColorLight";
  }

  let sizeStyles = "";
  if (size === "small") {
    sizeStyles = "text-sm px-4 py-3 font-normal hover:font-semibold";
  }
  if (size === "medium") {
    sizeStyles = "text-sm p-4 font-semibold lg:p-3";
  } else if (size === "large") {
    sizeStyles = "text-2xl px-8 py-6 font-semibold md:text-2xl md:px-6 md:py-4 sm:text-xl";
  }

  let hasIconStyles = "";
  if (hasIcon) {
    hasIconStyles = "flex items-center gap-x-4 hover:gap-x-6 hover:scale-102"
  }
  return (
    <>
      <a href={href} className={`cursor-pointer text-center rounded-full transition-all duration-200 whitespace-nowrap ${sizeStyles} ${typeStyles} ${className} ${hasIconStyles}`}>{text}
        {hasIcon &&
          <FontAwesomeIcon icon={faChevronRight} size='xs' />
        }
      </a>
    </>
  )
}

export default LinkButton