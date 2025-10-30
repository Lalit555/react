import React from 'react'
import ThemeSwitch from './ThemeSwitcher'

const Navbar = () => {
  return (
    <div className='w-full px-10 py-4 justify-between items-center flex dark:bg-black bg-blue-900' >
        <div className="div">
              <h2 className="text-5xl font-extrabold 
  bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 
  text-transparent bg-clip-text 

  tracking-widest uppercase 
  
   hover:scale-110 transition-transform duration-300">
                  Shopify
              </h2>
        </div>
        <div className="text-white flex gap-8 font-medium">
            <h4>Home</h4>
            <h4>Products</h4>
            <h4>About</h4>
            <h4>Contact</h4>
        <ThemeSwitch/>

            
        </div>
      
      
    </div>
  )
}

export default Navbar
