import React, { useState } from 'react'
import Bookmark from '../components/Bookmark'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/Button'
import InputBox2 from '../components/InputBox2'

const BookmarksDiv = ({ heading, bookmarks, setBookmarks }) => {
  const [isBookmarkBoxVisible, setIsBookmarkBoxVisible] = useState(false);
  const defaultBookmark = {
    bookmarkName: "",
    bookmarkUrl: "",
  };
  const [newBookmark, setNewBookmark] = useState(defaultBookmark);

  const handleInputChange = (e) => {
    setNewBookmark({ ...newBookmark, [e.target.name]: e.target.value });
  };
  const toggleBookmarkBox = (e) => {
    e.preventDefault();
    setIsBookmarkBoxVisible((prevState) => !prevState);
  }
  const setBookmarkHandler = (e) => {
    e.preventDefault();
    setBookmarks((prevState) => ([...prevState, newBookmark]));
    setNewBookmark(defaultBookmark);
    setIsBookmarkBoxVisible((prevState) => !prevState);
  }



  return (
    <>
      <div className='flex flex-col gap-y-8'>
        <div>
          <h2 className='text-xl text-white font-semibold'>{heading}</h2>
        </div>
        <div className='grid grid-cols-6 gap-x-4 gap-y-8 px-8'>
          {
            bookmarks?.map((bookmark, index) => (
              <Bookmark key={index} name={bookmark.bookmarkName} href={bookmark.bookmarkUrl} />
            ))
          }
          <div className='px-4'>
            <button onClick={toggleBookmarkBox} className='w-full flex flex-col items-center gap-y-3'>
              <FontAwesomeIcon className='bg-white h-5 w-5  rounded-xl p-2' icon={faPlus} width={0} height={0} />
              <span className='text-sm font-semibold text-center'>Add Bookmark</span>
            </button>
          </div>
        </div>
        {
          isBookmarkBoxVisible &&
          <>
            <div className='fixed top-0 left-0 right-0 bottom-0 z-30 bg-black opacity-20' onClick={toggleBookmarkBox}></div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-10 py-10 rounded-xl shadow-2xl z-40'>
              <button className='absolute top-3 right-4' onClick={toggleBookmarkBox}>
                <FontAwesomeIcon icon={faX} width={16} height={16} />
              </button>
              <form className='space-y-3'>
                <InputBox2 label='Name' nameIdHtmlFor={"bookmarkName"} onChange={handleInputChange} value={newBookmark.bookmarkName} />
                <InputBox2 label='URL' nameIdHtmlFor={"bookmarkUrl"} onChange={handleInputChange} value={newBookmark.bookmarkUrl} />
                <Button onClick={setBookmarkHandler} size='small' text={"Add bookmark"} />
              </form>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default BookmarksDiv