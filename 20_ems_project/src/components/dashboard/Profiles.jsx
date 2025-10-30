import React, { useContext, useState } from 'react'
import {Plus,X} from'lucide-react'
import AddEmployeeModal from './AddEmployeeModal';
import { AppDataContext } from '../../context/AppContext';

const Profiles = () => {
     const [showDialog, setShowDialog] = useState(false);
     const [currentUser, setCurrentUser, data, setData] =useContext(AppDataContext)
    const colors = ["#ef4444", "#3b82f6", "#22c55e", "#f59e0b", "#10b981"];
    //  console.log(data.admins[0].email);
     
  return (
      <div className='bg-gray-700 mt-5 lg:w-1/2 h-85 rounded-2xl px-5 py-5 overflow-auto'>
        <div className='text-3xl text-white font-bold w-full flex justify-between'>
              <h1 className='text-3xl text-white'>Employees</h1>
              <div className='flex gap-3 items-center text-2xl text-gray-400'>
                <h1 className=''>Add Employee</h1>
                  
                    <AddEmployeeModal/>

              </div>
        </div>
        <div id='tasklist' className='mt-8 flex flex-nowrap gap-3 overflow-auto'>
              {Object.keys( data.employees).length === 0 ? (<div className='w-full h-50 flex items-center justify-center text-2xl font-bold text-gray-400'><h1>No Employees Yet!</h1></div>) : (
                  Object.entries( data.employees).reverse().map(([id,e]) => {
                    console.log(e.id)
                      return <div key={id} className="shrink-0 h-55 w-100 bg-gray-900 rounded-4xl border-[2px] border-white/40 px-5 py-3 shadow-[0_0_5px_1px_rgba(255,0,255,0.5)]">
                          <div className='w-full h-[40%] flex justify-between items-center '>
                              <div className="flex">
                                  <img className='h-16 w-16 object-cover rounded-full border-white border-2 ' src={e.profilePic} alt="" />
                                  <div className='flex flex-col justify-end  px-4 py-4'>
                                      <h2 className='text-white font-bold'>{e.firstName} {e.lastName}</h2>
                                      <h2 className='text-[12px] text-white/60'>{e.email}</h2>
                                  </div>


                              </div>
                              <div style={{ backgroundColor: colors[1 % colors.length] }} className={`  text-white rounded-2xl px-5 py-2`}>{e.role}</div>
                          </div>
                          <span className='flex justify-center h-1 border-t-[1px] mx-10 border-gray-700 mb-2'></span>
                          <div className='flex items-center justify-between'>
                              <div className=" flex flex-col items-center">
                                  <h2 className='text-white font-bold '>{e.completedTasks+e.progressTasks}</h2>
                                  <h2 className='text-white font-semibold '>Total Tasks</h2>

                              </div>
                              <div className=" flex flex-col items-center">
                                  <h2 className='text-white font-bold '>{e.completedTasks}</h2>
                                  <h2 className='text-white font-semibold '>Finished Tasks</h2>

                              </div>
                              <div className=" flex flex-col items-center">
                                  <h2 className='text-white font-bold '>{e.progressTasks}</h2>
                                  <h2 className='text-white font-semibold '>In-Progress</h2>

                              </div>

                          </div>
                          <button className='bg-white text-black w-full py-2 mt-2 rounded-2xl cursor-pointer hover:bg-gray-300 active:scale-95'>View Profile</button>
                      </div>
                  })
                  
                    
                
              )}
              
            
             
              
        </div>

      
    </div>
  )
}

export default Profiles
