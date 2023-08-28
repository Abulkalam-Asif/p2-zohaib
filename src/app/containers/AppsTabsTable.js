import Image from 'next/image';
import React from 'react';
import AppsTabsButton from '../components/AppsTabsButton';

const AppsTabsTable = ({ appsData, selectedTab }) => {
  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-base text-left text-gray-500">
          <thead className="text-sm text-zinc-900 uppercase bg-themeColorLight">
            <tr className='grid grid-cols-4'>
              <th scope="col" className="px-6 py-3 col-span-2">
                Apps
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Organizational
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Personal
              </th>
            </tr>
          </thead>
          <tbody>
            {appsData
              .filter(app => app.categories.includes(selectedTab))
              .map((app, index) => (
                <tr key={index} className="grid  grid-cols-4 bg-themeColorExtraLight border-b-2 border-b-themeColorLight">
                  <td
                    className="col-span-2 flex items-center gap-x-2 px-6 py-4 font-semibold text-black whitespace-nowrap"
                  >
                    <Image src={app.logo} alt="logo" width={0} height={0} />
                    <span>{app.name}</span>
                  </td>
                  <td className="px-2 py-4"><AppsTabsButton connectStatus={app.connect.organizatioal} /></td>
                  <td className="px-2 py-4"><AppsTabsButton connectStatus={app.connect.personal} /></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AppsTabsTable;