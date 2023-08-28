"use client"
import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [isSidebarOut, setIsSidebarOut] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOut(prevState => !prevState);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOut, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  return useContext(SidebarContext);
}