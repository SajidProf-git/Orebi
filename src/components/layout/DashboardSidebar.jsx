import React from 'react'
import { NavLink } from 'react-router-dom'

const data = [
    {
        id: 1,
        title: "Dashboard",
        url: "/dashboard",
    },
    {
        id: 2,
        title: "Profile",
        url: "/profile",
    },
    {
        id: 3,
        title: "Download",
        url: "/download",
    },
    {
        id: 4,
        title: "Addresses",
        url: "/ddresses",
    },
    {
        id: 5,
        title: "Account details",
        url: "/account details",
    },
    {
        id: 6,
        title:"Others",
        url:"/others",
    },
    {
        id: 7,
        title: "Logout",
        url: "/logout",
    },
]





const DashboardSidebar = () => {
  return (
    <div className='W-58.5'>
      <ul className='flex flex-col gap-1'>
        {data.map ((item,index) =>(
            <li className='border-b border-b-gray_1 last:border-b-0 py-3' key={index}>
                <NavLink to={item.url} className={`text-gray_3  hover:text-black`}>
                    {item.title}
                </NavLink>
            </li>
        ))

        }
      </ul>
    </div>
  )
}

export default DashboardSidebar
