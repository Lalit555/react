import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log('hiii')
  console.log(props.users);
  return (
   <div id='right' className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
        {props.users.map(function(elem,idx){

          return <RightCard  color={elem.color} id={idx+1} img={elem.img} tag={elem.tag} />
        })}
    </div>
  )
}

export default RightContent
