import React, { useContext, useRef, useState } from 'react'
import {  CalendarDays, BookUser, Boxes, NotebookPen,Timer } from "lucide-react";
import AssignToDropdown from './AssignToDropDown';
import { Toaster, toast } from 'sonner'
import { AppDataContext } from '../../context/AppContext';
import PriorityDropdown from './PriorityDropdown';

const AdminDashboardCreateTask = () => {
  const [currentUser, setCurrentUser, data, setData] =useContext(AppDataContext)
  const [assignedTo, setAssignedTo] = useState(null);
  const [priority, setPriority] = useState(null);
    const dateRef = useRef(null);
     const [formData, setFormData] = useState({
            title: "",
            date: "",
            assignTo: "",
            description: "",
           status:"In-Progress"
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
        };
  function getCurrentIST() {
    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000; // +5:30 in ms
    const istTime = new Date(now.getTime() + istOffset);
    return istTime.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(formData.title.length===0){
      toast.warning("Please enter task title!")
      return
    }
    if (formData.date.length === 0) {
      toast.warning("Please select completion date for task!")
      return
    }
    if(!assignedTo){
      toast.warning("Please choose a employee for task")
      return
    }
    if (formData.description.length === 0) {
      toast.warning("Please provide some description for task!")
      return
    }
  const len = Object.keys(data.tasks).length;
const taskId = `task_00${len + 1}`;

const newTask = {
  [taskId]: {
    taskId: taskId,
    title: formData.title,
    date: formData.date,
    assignedTo: assignedTo,
    priority: priority ? priority : "Low",
    description: formData.description,
    assignedOn:getCurrentIST(),
    status: "In-Progress",
  },
};

// ✅ 1. Update employee progress count and task list
const updatedEmployees = { ...data.employees };

// Find the employee by email and update
const employeeKey = assignedTo

if (assignedTo) {
  updatedEmployees[employeeKey] = {
    ...updatedEmployees[employeeKey],
    progressTasks: (updatedEmployees[employeeKey].progressTasks || 0) + 1,
    taskIds: [
      ...(updatedEmployees[employeeKey].taskIds || []),
      taskId, // ✅ use the id, not whole object
    ],
  };
}

// ✅ 2. Add the new task to the tasks object
const updatedTasks = {
  ...data.tasks,
  ...newTask,
};

// ✅ 3. Combine both updates into one object
const newData = {
  ...data,
  employees: updatedEmployees,
  tasks: updatedTasks,
};

// ✅ 4. Update state & localStorage
setData(newData);
localStorage.setItem("data", JSON.stringify(newData));

toast.success("Task Added & Assigned Successfully");


    

    console.log(newData)
    setFormData({
      title: "",
      date: "",
      assignTo: "",
      description: "",
      status: "In-Progress"
})
setAssignedTo(null)
setPriority(null)

    

  }
  return (
    <>
    <Toaster position="top-right" richColors duration={2000} />
      <div className='w-full  bg-gray-700 mt-5  rounded-2xl px-5 py-5'>
        <h2 className='w-full font-bold text-3xl text-white flex justify-center mb-5'>Create New Task</h2>
        <div className=" w-full lg:flex lg:items-start sm:items-center justify-between">
          <div className=' lg:w-1/2'>
            <h3 className='text-white mb-1'>Task Title</h3>
            <div className="relative lg:w-[80%] mb-2 group">
              <NotebookPen className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-white/60 transition-colors duration-300" size={20} />
              <input
                value={formData.title}
                onChange={handleChange}
                name='title'
                type="text"
                placeholder="Enter Your Task Title"
                className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-800 text-white/60 placeholder-gray-400 
               border border-white/40 focus:border-white/60 focus:border-2  focus:text-white
               focus:outline-none transition-all duration-300"
              />
            </div>
            <h3 className='text-white mb-1'>Date</h3>
            <div className="relative lg:w-[80%] mb-2 group">
              <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-white/60 transition-colors duration-300" size={20} />
              <input
                onFocus={() => dateRef.current?.showPicker()}
                ref={dateRef}
                value={formData.date}
                onChange={handleChange}
                type="datetime-local"
                name='date'
                placeholder="DD/MM/YYYY"

                className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-800 text-white/60 placeholder-gray-400 
               border border-white/40 focus:border-white/60 focus:border-2  focus:text-white
               focus:outline-none transition-all duration-300"
              />
            </div><h3 className='text-white mb-1'>Assign to</h3>
            <div className="relative lg:w-[80%] mb-2 group">
              <AssignToDropdown onSelect={setAssignedTo} assignedTo={assignedTo} />
              <BookUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-white/60 transition-colors duration-300" size={20} />
              
            </div><h3 className='text-white mb-1'>Priority</h3>
            <div className="relative lg:w-[80%] mb-2 group">
              <PriorityDropdown onSelect={setPriority} priority={priority} />
              <Timer className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-white/60 transition-colors duration-300" size={20} />
              
            </div>
            
            
           
           



          </div>
          <div className=' flex flex-col lg:w-[45%] sm:w-[80%] h-full  '>

            <h3 className='text-white mb-2'>Description</h3>
            <textarea value={formData.description}
              onChange={handleChange} name="description" id="" className='h-[220px] w-full border border-white/40  focus:border-white/60 focus:border-2 focus:text-white text-white/60 bg-gray-800 p-4 outline-none mb-4 rounded-xl '></textarea>
            <button type='submit' onClick={(e) => { handleSubmit(e) }} className='text-white h-10 bg-green-500 rounded '>Create Task</button>
          </div>
        </div>


      </div>
    
    </>
    
  )
}

export default AdminDashboardCreateTask
