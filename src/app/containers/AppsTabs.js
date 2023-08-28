"use client"
import React, { useState } from 'react'
import AppsTabsHeader from './AppsTabsHeader'
import AppsTabsTable from './AppsTabsTable'
import asanaLogo from "../assets/dashboard/tabsList/asana.svg";
import confluenceLogo from "../assets/dashboard/tabsList/confluence.svg";
import dropboxLogo from "../assets/dashboard/tabsList/dropbox.svg"
import gitbookLogo from "../assets/dashboard/tabsList/gitbook.svg"
import githubLogo from "../assets/dashboard/tabsList/github.svg";
import gmailLogo from "../assets/dashboard/tabsList/gmail.svg"
import googleDriveLogo from "../assets/dashboard/tabsList/google_drive.svg"
import intercomLogo from "../assets/dashboard/tabsList/intercom.svg";
import jiraLogo from "../assets/dashboard/tabsList/jira.svg"
import linearLogo from "../assets/dashboard/tabsList/linear.svg"
import microsoftTeamsLogo from "../assets/dashboard/tabsList/microsoft_teams.svg"
import notionLogo from "../assets/dashboard/tabsList/notion.svg"
import onedriveLogo from "../assets/dashboard/tabsList/onedrive.svg"
import outlookLogo from "../assets/dashboard/tabsList/outlook.svg"
import quipLogo from "../assets/dashboard/tabsList/quip.svg"
import salesforceLogo from "../assets/dashboard/tabsList/salesforce.svg";
import slackLogo from "../assets/dashboard/tabsList/slack.svg"
import zendeskLogo from "../assets/dashboard/tabsList/zendesk.svg"


const AppsTabs = () => {
  const [selectedTab, setSelectedTab] = useState("popular");

  const appsData = [
    {
      name: "Asana",
      logo: asanaLogo,
      categories: ["all", "project_management"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "Confluence",
      logo: confluenceLogo,
      categories: ["all", "wikis_&_docs"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "Dropbox",
      logo: dropboxLogo,
      categories: ["all", "wikis_&_docs", "popular"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "GitBook",
      logo: gitbookLogo,
      categories: ["all", "wikis_&_docs"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "GitHub",
      logo: githubLogo,
      categories: ["all", "code"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "Gmail",
      logo: gmailLogo,
      categories: ["all", "messaging"],
      connect: {
        organizatioal: true,
        personal: true,
      }
    },
    {
      name: "Google Drive",
      logo: googleDriveLogo,
      categories: ["all", "wikis_&_docs", "popular"],
      connect: {
        organizatioal: true,
        personal: true,
      }
    },
    {
      name: "Intercom",
      logo: intercomLogo,
      categories: ["all", "support"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "Jira",
      logo: jiraLogo,
      categories: ["all", "project_management"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "Linear",
      logo: linearLogo,
      categories: ["all", "project_management"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "Microsoft Teams",
      logo: microsoftTeamsLogo,
      categories: ["all", "messaging"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "Notion",
      logo: notionLogo,
      categories: ["all", "wikis_&_docs", "popular"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "OneDrive",
      logo: onedriveLogo,
      categories: ["all", "wikis_&_docs"],
      connect: {
        organizatioal: true,
        personal: false,
      }
    },
    {
      name: "Outlook",
      logo: outlookLogo,
      categories: ["all", "messaging"],
      connect: {
        organizatioal: true,
        personal: false,
      }
    },
    {
      name: "Quip",
      logo: quipLogo,
      categories: ["all", "wikis_&_docs"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "Salesforce",
      logo: salesforceLogo,
      categories: ["all", "crm"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "Slack",
      logo: slackLogo,
      categories: ["all", "messaging", "popular"],
      connect: {
        organizatioal: false,
        personal: true,
      }
    },
    {
      name: "Zendesk",
      logo: zendeskLogo,
      categories: ["all", "support"],
      connect: {
        organizatioal: true,
        personal: true,
      }
    }
  ];


  return (
    <>
      <div className='space-y-4'>
        <AppsTabsHeader setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <AppsTabsTable appsData={appsData} selectedTab={selectedTab} />
      </div>
    </>
  )
}

export default AppsTabs