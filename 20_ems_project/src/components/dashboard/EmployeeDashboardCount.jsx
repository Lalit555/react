import React from 'react'

const EmployeeDashboardCount = () => {
  return (
    <div className='flex items-start justify-start mt-10 gap-5'>
        <div className='bg-blue-500 rounded-2xl px-8 py-4 w-1/4'>
            <h2 className='text-white font-bold text-3xl mb-1'>0</h2>
            <h1 className='text-white font-bold text-3xl'>Total Tasks</h1>
        </div>
        <div className='bg-yellow-500 rounded-2xl px-8 py-4 w-1/4'>
          <h2 className='text-white font-bold text-3xl mb-1'>0</h2>
          <h1 className='text-white font-bold text-3xl'>Pending Tasks</h1>
        </div>
          <div className='bg-green-500 rounded-2xl px-8 py-4 w-1/4'>
              <h2 className='text-white font-bold text-3xl mb-1'>0</h2>
              <h1 className='text-white font-bold text-3xl'>Completed Tasks</h1>
          </div>
          <div className='bg-red-500 rounded-2xl px-8 py-4 w-1/4'>
              <h2 className='text-white font-bold text-3xl mb-1'>0</h2>
              <h1 className='text-white font-bold text-3xl'>Failed Tasks</h1>
          </div>
         
      
    </div>
  )
}

export default EmployeeDashboardCount
