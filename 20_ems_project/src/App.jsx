import React, { useContext } from 'react'
import Login from './components/auth/Login'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { AppDataContext } from './context/AppContext'

const App = () => {
  const [currentUser,setCurrentUser,data]=useContext(AppDataContext)
  if(currentUser){
    console.log('user hai');
    

  }else{
    console.log('nah hai');
    

  }
 
  


  

  return (
    <div> 
      {currentUser?currentUser.role==='admin'?<AdminDashboard/>:<EmployeeDashboard></EmployeeDashboard>:<Login/>}
    {/* <EmployeeDashboard/> */}
    </div>
  )
}

export default App
