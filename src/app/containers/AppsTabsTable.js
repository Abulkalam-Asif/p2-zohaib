import Image from 'next/image';
import React from 'react';
import AppsTabsButton from '../components/AppsTabsButton';

const AppsTabsTable = ({ appsData, selectedTab }) => {
  return (
    <>
      <div className="relative overflow-x-auto w-full overflow-hidden">
        <div className='w-full overflow-auto'>
          <table className="w-full text-base text-left text-gray-500 min-w-[500px]">
            <thead className="text-sm text-zinc-900 uppercase bg-themeColor0Lighter">
              <tr className='grid grid-cols-4 lg:grid-cols-3'>
                <th scope="col" className="px-6 py-3 col-span-2 font-medium lg:col-span-1">
                  Apps
                </th>
                <th scope="col" className="px-6 py-3 text-center font-medium">
                  Organizational
                </th>
                <th scope="col" className="px-6 py-3 text-center font-medium">
                  Personal
                </th>
              </tr>
            </thead>
            <tbody>
              {appsData
                .filter(app => app.categories.includes(selectedTab))
                .map((app, index) => (
                  <tr key={index} className="grid  grid-cols-4 bg-white border-b-2 border-b-themeColor0Lighter lg:grid-cols-3">
                    <td
                      className="col-span-2 flex items-center gap-x-2 px-6 py-4 text-sm font-semibold text-black whitespace-nowrap lg:col-span-1"
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
      </div>
    </>
  );
};

export default AppsTabsTable;