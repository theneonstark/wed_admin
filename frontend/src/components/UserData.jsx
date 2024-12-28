import React from 'react'
import DashboardHeader from './ui/DashboardHeader'
import Sidebar from './ui/Sidebar'
import { Outlet } from 'react-router-dom'
import AppRoute from '../Routes/AppRoute'

function UserData() {
  return (
    <div>
      <div className="grid grid-cols-1">
      <DashboardHeader />
      <div className="flex gap-3">
        <div className="flex-none">
          <Sidebar />
        </div>
        <div className="flex-1">
        {/* <AppRoute/> */}
        {/* <Outlet/> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default UserData
