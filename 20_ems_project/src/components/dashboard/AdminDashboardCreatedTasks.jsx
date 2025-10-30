import React, { useContext } from 'react'
import {ChevronDown, ChevronUp,CalendarDays} from 'lucide-react'
import { AppDataContext } from '../../context/AppContext'
import { toast } from 'sonner'

const AdminDashboardCreatedTasks = () => {
  const Data = { 
    "employees":
     { "emp001": { "name": "pehlaemployee" },
        "emp002": { "name": "dusraemployee" } 
  }, 
     
    }
  const [currentUser, setCurrentUser, data, setData] =useContext(AppDataContext)
  function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);

    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    };

    return date.toLocaleString("en-GB", options).replace(",", "");
  }
  function getTimeAgo(dateString) {
    if (!dateString || typeof dateString !== "string") {
      return "No date"; // or return "" if you want it blank instead
    }

    try {
      const [datePart, timePart] = dateString.split("T");
      const [year, month, day] = datePart.split("-").map(Number);
      const [hour, minute] = timePart.split(":").map(Number);

      // Convert UTC to IST
      const past = new Date(Date.UTC(year, month - 1, day, hour - 5, minute - 30));
      const now = new Date();

      const diffMs = now - past;
      const seconds = Math.floor(diffMs / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (seconds < 60) return "Just now";
      if (minutes < 60) return `${minutes} min${minutes > 1 ? "s" : ""} ago`;
      if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
      if (days === 1) return "Yesterday";
      if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

      return past.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch (error) {
      console.error("Invalid date format:", dateString, error);
      return "Invalid date";
    }
  }



    
  return (
      <div id='tasklist' className=' lg:w-1/2 bg-gray-700 mt-5 rounded-2xl px-5 py-5 '>
      <div className="w-full flex flex-nowrap justify-center text-3xl font-bold mb-4 text-white">Tasks</div>
      <div id='tasklist' className=" h-[250px] flex gap-3  overflow-auto">
        {Object.keys(data.tasks).length === 0 ? (<div className='w-full h-50 flex items-center justify-center text-2xl font-bold text-gray-400'><h1>No Tasks Yet!</h1></div>) : (
          Object.entries(data.tasks).reverse().map(([id, task]) => {
         
            const assignedTo = task.assignedTo; // e.g. "emp_001"
            const date=formatDateTime(task.date)
            const assignedOn=getTimeAgo(task.assignedOn)
            const priority=task.priority
            // console.log(data.employees[assignedTo].email); // ✅ works

         
         return (<div key={id} className="h-60 w-120 shrink-0 bg-white rounded-2xl flex flex-col   px-3 mb-2">
            <div className="w-full  flex justify-between items-center">
             <div className={`${task.status === 'In-Progress' ? 'bg-yellow-200 text-amber-600 ' :'bg-green-200 text-green-500'} px-5 py-2 rounded-2xl  mt-3 text-sm`} >{task.status}</div>
              <div className="flex items-center gap-2">
                <h2 className='font-semibold text-gray-500'>{task.priority}</h2>
               <ChevronUp className={`${priority === 'High' ? 'bg-red-300':priority==='Medium'?'bg-amber-300':'bg-green-300'} rounded-full p-0.5 text-gray-600 `}size={25} />
              </div>
            </div>
            
            <h1 className='font-bold text-xl mt-3'>{task.title}</h1>
            <h3 className=' text-gray-500 text-[12px] line-clamp-2 min-h-10'>{task.description}</h3>
           <div className=" w-full flex justify-between items-end mt-3 mb-1">
             
             <h2 className='font-semibold text-[14px] text-gray-400'>Assigned to</h2>
             <h4 className='text-gray-400 text-[12px]'>{assignedOn}</h4>
           </div>
            
            <div className='w-full  flex flex-nowrap shrink-0 justify-between items-center  mb-3 '>
              <div className="flex items-center">
               <img className='h-12 w-12 object-cover rounded-full border-white border-2 ' src={data.employees[assignedTo].profilePic} alt="" />
                <div className='flex flex-col justify-end  px-4 '>
                 <h2 className='text-gray-700 font-bold'>{data.employees[assignedTo].firstName} {data.employees[assignedTo].lastName}</h2>
                 <h2 className='text-[12px] text-gray-400'>{data.employees[assignedTo].email}</h2>
                </div>


              </div>
              <div className=""></div>
              <div className='bg-amber-400 text-white rounded-2xl px-5 py-2 flex gap-2 items-center whitespace-nowrap text-[12px]'>
                <CalendarDays size={15} />{date}</div>
            </div>
          </div>)


        }))}
         
        
        
       
        
        </div>
        



      
    </div>
  )
}

export default AdminDashboardCreatedTasks
