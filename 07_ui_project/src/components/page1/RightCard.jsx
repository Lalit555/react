import React from 'react'
import {ArrowRight} from 'lucide-react'
import Arrow from './Arrow'

const RightCard = (props) => {
  return (
    <div className='h-full w-65 rounded-4xl bg-amber-300 overflow-hidden relative  shrink-0'>
      <img className='h-full w-full object-cover' src={props.img}/>
    <div className='top-0 left-0 w-full h-full absolute flex flex-col justify-between p-4'>
        <h1 className='bg-white h-10 w-10 rounded-full justify-center items-center flex text-xl font-bold'>{props.id}</h1>
        <div className="">
            <p className='text-40 text-white leading-relaxed mb-10 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab alias laboriosam eligendi  sit amet consectetur adipisicin aliquam optio nostrum!</p>
       <div className="flex justify-between">
        <button style={{backgroundColor:props.color}} className='bg-blue-600 rounded-full px-10 py-3 text-white font-medium'>{props.tag}</button>
        <button className=' rounded-full px-3 py-3 text-white font-medium'> <ArrowRight/></button>
       </div>
        </div>
    </div>
    </div>
  )
}

export default RightCard
