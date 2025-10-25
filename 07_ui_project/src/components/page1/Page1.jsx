import React from 'react'
import Navbar from './Navbar'
import Content from './Content'

const Page1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar/>
      <Content users={props.users} />
    </div>
  )
}

export default Page1
