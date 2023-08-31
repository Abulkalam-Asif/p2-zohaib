"use client"
import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  // The requirement was to display the sidebar by default on Desktop screens and hide it by default on the mobile screens. The simplest solution is what I have used and it is described here. 
  // isSidebarOut state works differently on screens below and above 768px.
  // On the screens above 768px, it works directly, means if it is true, Sidebar is expanded (out) and if it is false, Sidebar is collapsed (in).
  // On the screens below 768px, it works inverselly, means if it is true, Sidebar is collapsed and if it is false, Sidebar is expanded.
  
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