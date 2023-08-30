import React from 'react'
import AppTabsLabel from '../components/AppTabsLabel'

const AppsTabsHeader = ({ setSelectedTab, selectedTab }) => {
  return (
    <>
      <div className='flex gap-x-3 border-b border-b-themeColor0Base'>
        <AppTabsLabel text={"Popular"} label="popular" setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <AppTabsLabel text={"All"} label="all" setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <AppTabsLabel text={"Wiki & Docs"} label="wikis_&_docs" setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <AppTabsLabel text={"Messaging"} label="messaging" setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <AppTabsLabel text={"Project Management"} label="project_management" setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <AppTabsLabel text={"Code"} label="code" setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <AppTabsLabel text={"Support"} label="support" setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <AppTabsLabel text={"CRM"} label="crm" setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
      </div>
    </>
  )
}

export default AppsTabsHeader