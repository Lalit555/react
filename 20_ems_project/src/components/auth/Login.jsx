import React, { useContext, useState } from 'react'
import { Mail,Lock,Eye,EyeOff } from "lucide-react";
import {Toaster,toast} from 'sonner'
import { AppDataContext } from '../../context/AppContext';

const Login = () => {
    const [currentUser,setCurrentUser,data]=useContext(AppDataContext)
    const primary ='cyan-500'
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState("employee");
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) return "Email is required";
        if (!regex.test(email)) return "Enter a valid email address";

        return "Valid";
    }
    function validatePassword(password) {
        if (!password) return "Password is required";

        if (password.length < 8)
            return "Password must be at least 8 characters long";

        if (!/[a-z]/.test(password))
            return "Password must contain at least one lowercase letter";

        if (!/[A-Z]/.test(password))
            return "Password must contain at least one uppercase letter";

        return "Valid";
    }
    

    const handleChange = (e) => {
        setRole(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(validateEmail(email)!='Valid'){
            
            toast.info(validateEmail(email))
            return
        }
        if(validatePassword(password)!='Valid'){
            toast.info(validatePassword(password))
            return
        }

       
        if(role==='admin'){
            //console.log(data)

            data.admins.map((admin)=>{
                if(admin.password===password && admin.email===email){
                    const user = { role: role, email: email, firstName: admin.firstName, profilePic: admin.profilePic,id:admin.id }
                   setCurrentUser(user)
                   localStorage.setItem('currentUser',JSON.stringify(user))
                    toast.success("Logged in Successfully")
                    return
                     }
                

            })

        }else{
            Object.entries(data.employees).map(([id,employee]) => {
                if (employee.password === password && employee.email === email) {
                    const user = { role: role, email: email, firstName: employee.firstName, profilePic:employee.profilePic, id:employee.id }
                    setCurrentUser(user)
                    localStorage.setItem('currentUser', JSON.stringify(user))
                    toast.success("Logged in Successfully")
                    return;
                }


            })


        }
        toast.error("Invalid Credentials")
        
       


    }

  return (
    <>
          <Toaster position="top-right" richColors duration={2000} />
          <div className='h-screen w-screen flex items-center justify-center bg-gray-900 p-5'>
              <div className="bg-gray-700 rounded-2xl border-[1px] border-gray-400  p-10  shadow-[0_0_10px_1px_rgba(255,255,255,0.5)] ">
                  <form className='flex flex-col items-center'>
                      <img className='h-40 object-cover ' src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Ems-sem-fundo-logo.png" alt="" />
                      <h1 className={`font-serif text-2xl tracking-wider font-semibold text-blue-500 mb-5 whitespace-nowrap`}>Employee Management System</h1>
                      <div className="relative w-full mb-4 group">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-white/60 transition-colors duration-300" size={20} />
                          <input
                              value={email}
                              onChange={(e) => {
                                  setEmail(e.target.value)
                              }}
                              type="email"
                              placeholder="Email"
                              className="w-full pl-10 pr-3 py-3 rounded-lg bg-gray-800 text-white/60 placeholder-gray-400 
               border border-transparent focus:border-white/60 focus:border-2  focus:text-white
               focus:outline-none transition-all duration-300"
                          />
                      </div>
                      <div className="relative w-full mb-6">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

                          <input
                              value={password}
                              onChange={(e) => {
                                  setPassword(e.target.value)

                              }}
                              type={showPassword ? "text" : "password"}
                              placeholder="Password"
                              className="w-full pl-10 pr-10 py-3 rounded-lg bg-gray-800  placeholder-gray-400
                     border border-transparent focus:border-white/60 focus:border-2 focus:text-white text-white/60
                     focus:outline-none transition-all duration-300"
                          />

                          {/* Toggle Eye Icon */}
                          <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                          >
                              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                      </div>
                      <div className=" w-full flex gap-6 mb-5 justify-evenly">
                          {/* Employee Radio */}
                          <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                  type="radio"
                                  name="role"
                                  value="employee"
                                  checked={role === "employee"}
                                  onChange={handleChange}
                                  className="accent-blue-500 scale-110 cursor-pointer"
                              />
                              <span className={`${role == 'employee' ? 'text-gray-200' : 'text-gray-400'}`}>Employee</span>
                          </label>

                          {/* Admin Radio */}
                          <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                  type="radio"
                                  name="role"
                                  value="admin"
                                  checked={role === "admin"}
                                  onChange={handleChange}
                                  className="accent-blue-500 scale-110 cursor-pointer"
                              />
                              <span className={`${role == 'admin' ? 'text-gray-200' :'text-gray-400'}`}>Admin</span>
                          </label>
                      </div>
                      <button type='submit' onClick={(e) => {
                          handleSubmit(e)

                      }} className="w-full bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition active:scale-95">
                          Login
                      </button>
                  </form>


              </div>
          </div></>
    
  )
}

export default Login
