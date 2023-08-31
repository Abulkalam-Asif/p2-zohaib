"use client"
import React, { useState } from 'react'
import ChatInput from '../components/ChatInput'
import ChatMessageDisplay from '../components/ChatMessageDisplay'

const ChatContainer = () => {
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const toggleChat = () => {
    setIsChatExpanded((prevState) => !prevState);
  }

  return (
    <>
      <div className='fixed space-y-4 bottom-8 right-8 max-w-[20rem] md:bottom-4 md:right-4'>
        <ChatMessageDisplay isChatExpanded={isChatExpanded} header={"Meg from Dashworks"} timeAgo={"Just now"} message={<>
          Hey Nick,<br />
          Welcome to Dashworks <br />
          Take a look around and just respond to this message if you have any questions.<br />
          Meg
        </>} />
        <ChatInput toggleChat={toggleChat} />
      </div>
    </>
  )
}

export default ChatContainer