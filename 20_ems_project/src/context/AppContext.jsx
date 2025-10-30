import React, { createContext, useContext, useEffect, useState } from 'react'
export const AppDataContext=createContext()

const AppContext = (props) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [data,setData]=useState(null)
//  const Data= {
//     "employees": {
      
//  },

//       "admins": [
//         {
//           "id": "admin_001",
//           "firstName": "Lalit",
//           "lastName": "Adhana",
//           "email": "lalitadhana55@gmail.com",
//           "password": "Lalit@123",
//           "contactNumber": "9998887777",
//           "completedTasks": 10,
//           "failedTasks": 1,
//           "totalTasks": 11,
//           "taskIds": ["task_001"],
//           "profilePic": "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
//         }
//       ],

//         "tasks": {
          
//         }
//   }
//   localStorage.setItem('data',JSON.stringify(Data))
   
   

    useEffect(() => {

      setData(JSON.parse(localStorage.getItem('data')))
        const user = JSON.parse(localStorage.getItem('currentUser'))
        if(user){
            console.log('present')
            setCurrentUser(user)
        }
            
        
    
      
    }, [])
    

  



  return (
    <div>
        <AppDataContext.Provider value={[currentUser,setCurrentUser,data,setData]}>
              {props.children}
        </AppDataContext.Provider>
      
    </div>
  )
}

export default AppContext
