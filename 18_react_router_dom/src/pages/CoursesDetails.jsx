import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {
    const id=useParams()
  return (
      <div className='flex items-center justify-center  '>
          <h1 className='text-3xl text-white mt-50 '>{id.courseId} Details Page</h1>

      </div>
  )
}

export default CoursesDetails
