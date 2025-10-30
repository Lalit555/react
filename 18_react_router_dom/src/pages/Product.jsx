import React from 'react'
import { Link ,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex items-center justify-center gap-10 py-4 text-white mt-10'>
        <Link to='/products/men' className='text-xl font-semibold'>Mens</Link>
        <Link to='/products/women' className='text-xl font-semibold'>Womens</Link>
        <Link to='/products/kids' className='text-xl font-semibold'>Kids</Link>

      </div>
      <Outlet />
    </div>
    
  )
}

export default Product
