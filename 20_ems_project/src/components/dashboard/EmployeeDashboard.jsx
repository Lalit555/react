import React from 'react'
import DashboardHeader from './DashboardHeader'
import EmployeeDashboardCount from './EmployeeDashboardCount'
import EmployeeDashboardTasklist from './EmployeeDashboardTasklist'

const EmployeeDashboard = () => {
  return (
      <div className='h-screen bg-gray-900 px-7 py-3'>
        <DashboardHeader/>
      <EmployeeDashboardCount/>
      <EmployeeDashboardTasklist/>
    </div>
  )
}

export default EmployeeDashboard
