import React, { useContext, useEffect, useRef, useState } from 'react'
import { X } from 'lucide-react'
import { AppDataContext } from '../../context/AppContext'

const DashboardHeader = () => {
  const [currentUser,setCurrentUser,data]=useContext(AppDataContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside both menu and button
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="flex items-center justify-between w-full">
      {/* Left Side */}
      <div className="text-white font-semibold text-2xl">
        Hello,<br />
        <span className="text-3xl font-bold">{currentUser.firstName}👋</span>
      </div>
      <img className='h-25 object-cover ' src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Ems-sem-fundo-logo.png" alt="" />


      {/* Right Side */}
      <div className="relative">
        {/* Profile Image */}
        <img
          ref={buttonRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className={`h-15 w-15 rounded-full object-cover border-2 cursor-pointer ${menuOpen ? 'border-red-400' : 'border-white'
            } hover:border-red-400 transition`}
          src={currentUser.profilePic}
          alt=""
        />

        {/* Dropdown */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-20 right-4 bg-white px-5 py-3 rounded-2xl w-72 flex flex-col justify-center items-center gap-3 shadow-[0_0_10px_1px_rgba(0,0,0,0.5)] z-50"
          >
            <div className="w-full flex justify-between items-center">
              <h3 className="flex-1 text-center text-sm text-gray-800">
               {currentUser.email}
              </h3>
              <X
                onClick={() => setMenuOpen(false)}
                className="hover:bg-gray-200 rounded-full p-1 cursor-pointer"
                size={26}
              />
            </div>

            <img
              className="h-20 w-20 rounded-full object-cover border-2 border-gray-500"
              src={currentUser.profilePic} alt=""
            />
            <h2 className="text-2xl font-semibold">Hii, Lalit</h2>

            <button className="w-full border-2 border-gray-300 rounded-2xl px-5 py-2 text-blue-500 font-semibold hover:bg-blue-200 flex items-center justify-center active:scale-95">
              Edit Your Profile
            </button>

            <button onClick={()=>{
              setCurrentUser(null)
              localStorage.removeItem('currentUser')

            }} className="w-full bg-red-400 text-white px-5 py-2 rounded-2xl hover:bg-gray-400 transition active:scale-95">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default DashboardHeader
