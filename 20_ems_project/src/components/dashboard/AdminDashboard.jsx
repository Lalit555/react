import React from 'react'
import DashboardHeader from './DashboardHeader'
import AdminDashboardCreateTask from './AdminDashboardCreateTask'
import AdminDashboardCreatedTasks from './AdminDashboardCreatedTasks'
import Profiles from './Profiles'
import AddEmployeeModal from './AddEmployeeModal'

const AdminDashboard = () => {
  return (
      <div className='min-h-screen bg-gray-900 px-7 py-3'>
     < DashboardHeader/>
     <AdminDashboardCreateTask/>
     <div className='lg:flex justify-between  gap-3' >
      <Profiles/>
        <AdminDashboardCreatedTasks />
     </div>
     
     
    </div>
  )
}

export default AdminDashboard
