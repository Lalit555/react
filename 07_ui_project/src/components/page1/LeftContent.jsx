import React from 'react'

import Arrow from './Arrow'
import HeroText from './HeroText'

const LeftContent = () => {
  return (
    <div className='flex flex-col  justify-between h-full w-1/3 bg-white' >
       <HeroText/>

        <Arrow/>
      
    </div>
  )
}

export default LeftContent
