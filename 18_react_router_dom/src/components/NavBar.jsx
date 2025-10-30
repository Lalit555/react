import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate=useNavigate()
  return (
    <div className='w-full h-15 p-5 flex justify-between items-center  bg-white/5 backdrop-blur-md backdrop-saturate-150 shadow-lg'>
      <div className="absolute inset-0 -z-10 overflow-visible">
        <div className="absolute -left-10 -top-8 w-60 h-40 bg-gradient-to-r from-pink-400/60 to-yellow-200/50 rounded-full blur-3xl "></div>
        <div className="absolute right-0 top-0 w-52 h-32 bg-gradient-to-r from-sky-400/60 to-blue-500/50 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute left-1/3 bottom-0 w-72 h-40 bg-gradient-to-r from-indigo-400/60 to-cyan-400/60 rounded-full blur-3xl animate-[float_9s_ease-in-out_infinite]"></div>
      </div>
      {/* <h2 className="text-4xl 
               text-white 
               font-extrabold 
               uppercase 
               tracking-wide 
               drop-shadow-lg 
               transform hover:scale-105 
               transition-transform duration-300 
               ">
        Shopify
      </h2>
       */}
      <h2 className="text-5xl font-extrabold 
  bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
  text-transparent bg-clip-text 

  tracking-widest uppercase 
  
   hover:scale-110 transition-transform duration-300">
        Shopify
      </h2>



      <div className="flex gap-10">
        <Link to='/' className='hover:text-red-400 text-white font-semibold'>Home</Link>
        <Link to='/about' className='hover:text-red-400 text-white font-semibold'>About</Link>
        <Link to='/contact' className='hover:text-red-400 text-white font-semibold'>Contact</Link>
        <Link to='/products' className='hover:text-red-400 text-white font-semibold'>Products</Link>
        <Link to='/courses' className='hover:text-red-400 text-white font-semibold'>Courses</Link>
      </div>
      <div className=" flex justify-center items-center gap-4">
        <button onClick={()=>{navigate('/')}} className=' backdrop-blur-md backdrop-saturate-150 border-2 border-green-200 text-white rounded-2xl px-4 py-2 active:scale-95'>Home</button>
        <button onClick={() => { navigate(+1)}} className=' backdrop-blur-md backdrop-saturate-150 border-2 border-green-200 text-white rounded-2xl px-4 py-2 active:scale-95'>Next</button>
        <button onClick={() => {navigate(-1) }} className=' backdrop-blur-md backdrop-saturate-150 border-2 border-green-200 text-white rounded-2xl px-4 py-2 active:scale-95 '>Back</button>
        

        
      </div>
      
    </div>
  )
}

export default NavBar
