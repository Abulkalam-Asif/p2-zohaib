import React, { useEffect, useState } from 'react'
import Bookmark from '../components/Bookmark'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import InputBox2 from '../components/InputBox2'
import Button2 from '../components/Button2'
import { v4 as uuidv4 } from 'uuid';
import { useThemeColorContext } from '../contexts/ThemeColorContext'


const BookmarksDiv = ({ heading, bookmarksList, setBookmarksList, category }) => {
  const { themeColor } = useThemeColorContext()

  const [isBookmarkBoxVisible, setIsBookmarkBoxVisible] = useState(false);

  const [newBookmark, setNewBookmark] = useState({
    bookmarkName: "",
    bookmarkUrl: ""
  });

  const handleInputChange = (e) => {
    setNewBookmark({ ...newBookmark, [e.target.name]: e.target.value });
  };
  const toggleBookmarkBox = (e) => {
    e.preventDefault();
    setIsBookmarkBoxVisible((prevState) => !prevState);
  }
  const setBookmarkHandler = (e) => {
    e.preventDefault();
    const newBookmarkWithId = {
      ...newBookmark,
      id: uuidv4()
    };
    setBookmarksList((prevState) => [...prevState, newBookmarkWithId]);
    setIsBookmarkBoxVisible((prevState) => !prevState);
    setNewBookmark({
      bookmarkName: "",
      bookmarkUrl: ""
    });
  }

  const removeBookmarkHandler = (e, id) => {
    e.preventDefault();
    const newBookmarksList = bookmarksList.filter(bookmark => bookmark.id !== id);
    setBookmarksList(newBookmarksList);
  };


  useEffect(() => {
    if (isBookmarkBoxVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
      setNewBookmark({
        bookmarkName: "",
        bookmarkUrl: ""
      });
    }
  }, [isBookmarkBoxVisible]);


  return (
    <>
      <div className='flex flex-col gap-y-8 sm:gap-y-4'>
        <div>
          <h2 className='text-white font-semibold'>{heading}</h2>
        </div>
        <div className='grid grid-cols-6 gap-x-4 gap-y-8 px-8 md:grid-cols-3 sm:grid-cols-2 md:gap-2 sm:px-0'>
          {
            bookmarksList?.map((bookmark) => (
              <Bookmark key={bookmark.id} id={bookmark.id} title={bookmark.bookmarkTitle} href={bookmark.bookmarkLink} removeBookmarkHandler={removeBookmarkHandler} />
            ))
          }
          <button onClick={toggleBookmarkBox} className={`w-full flex flex-col items-center gap-y-3 ${themeColor.bg.hocus.light} p-4 rounded-xl`}>
            <FontAwesomeIcon className='bg-white h-5 w-5  rounded-xl p-2' icon={faPlus} width={0} height={0} />
            <span className='text-white text-sm font-semibold text-center'>Add Bookmark</span>
          </button>
        </div>
        {
          isBookmarkBoxVisible &&
          <>
            <div className='fixed top-0 left-0 right-0 bottom-0 z-[90] bg-black opacity-30' onClick={toggleBookmarkBox}></div>
            <div className='fixed w-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-3xl z-[99] md:w-10/12 sm:w-full'>
              <div className='flex items-center justify-between px-6 pt-4 pb-3 border-b-2 border-themeColor0Lighter'>
                <h3 className='font-semibold'>New {category} bookmark</h3>
                <button className='px-3 py-2' onClick={toggleBookmarkBox}>
                  <FontAwesomeIcon icon={faX} width={16} height={16} />
                </button>
              </div>
              <form>
                <div className='space-y-5 px-10 pt-6 pb-8'>
                  <InputBox2 label='Title' nameIdHtmlFor={"bookmarkTitle"} onChange={handleInputChange} value={newBookmark.bookmarkTitle} placeholder={"Give your bookmark a title"} />
                  <InputBox2 label='Link' nameIdHtmlFor={"bookmarkLink"} onChange={handleInputChange} value={newBookmark.bookmarkLink} placeholder={"https://example.com"} />
                </div>
                <div className='flex justify-between border-t-2 border-t-themeColor0Lighter px-6 py-6'>
                  <Button2 type='reset' onClick={toggleBookmarkBox} text={"Cancel"} styleType='outlined' />
                  <Button2 type='submit' onClick={setBookmarkHandler} text={"Add"} />
                </div>
              </form>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default BookmarksDiv