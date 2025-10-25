import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = (props) => {
  return (
    <div className='h-[90vh] w-full gap-10 flex  items-center  py-10 px-18'>
        <LeftContent/>
        <RightContent users={props.users}/>
      
    </div>
  )
}

export default Content
