// import { useState } from "react";
// import {Trash2,Pencil,EllipsisVertical} from 'lucide-react'
// // import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Toaster, toast } from 'sonner';

// const App = () => {
//   const maxLength = 100;
//   const [title, setTitle] = useState("");
//   const [details, setDetails] = useState("");
//   const [notes , setNotes]=useState([])
  
//   const [editing, setEditing] = useState(false);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [showDialog, setShowDialog] = useState(false);
//   const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);
//   const [deleteIndex, setDeleteIndex] = useState(null);
//   const [moreVisible , setMoreVisible]=useState(false)
//   // const notify = () => toast.success("Note deleted!");
//   function handleSubmit(e){
//     console.log(notes)
    
//     e.preventDefault()
//     if (title.length === 0) {
//       toast.warning("Please add note title");
//       return
//     }
//     if (details.length === 0) {
//       toast.warning("Please add note details");
//       return
//     }
//     if(editing){
//       const copyNotes = [...notes]
//       copyNotes[editingIndex] = { ...copyNotes[editingIndex], title, details };

//       setNotes(copyNotes)
//       setTitle('')
//       setDetails('')
//       setEditingIndex(null)
//       setEditing(false)
//       toast.success("Note updated!");
//       return

//     }
//     const copyNotes=[...notes]
    
//     const newNote={title:title,details:details}
//     copyNotes.push(newNote)
//     setNotes(copyNotes)
//     setTitle('')
//     setDetails('')
//     toast.success("Note saved!");
    

//   }
//   const handleDelete=(indexToDelete)=>{
//     toast.success("Note deleted!");
   
//     const copyNotes=[...notes]
//     copyNotes.splice(indexToDelete,1)
//     setNotes(copyNotes)
//     setShowDialog(false);
//     setDeleteIndex(null);
   

//   }
//   const handleEdit=(element,index)=>{
//     setTitle(element.title)
//     setDetails(element.details)
//     setEditing(true)
//     setEditingIndex(index)
//   }
//   const handleCancel=()=>{
//     setTitle('')
//     setDetails('')
//     setEditingIndex(null)
//     setEditing(false)

//   }
//   const handleDeleteAll=()=>{
//     setNotes([])
//     setTitle('')
//     setDetails('')
//     setEditingIndex(null)
//     setEditing(false)
//     setShowDeleteAllDialog(false)
//     toast.success(" All notes deleted!");

//   }
//   return (
//   <>
//    {/* <Toaster position="top-right" /> */}
//       {/* <ToastContainer position="top-right" /> */}
//       <Toaster  position="top-right"
//         richColors
//         duration={2000} />
//         <div className="h-screen bg-black text-white  mt-10 lg:flex  items-start relative">
//         {/* <Toaster position="top-right" /> */}
//         <div className="w-full h-15 bg-green-300 text-white flex justify-between items-center px-5 py-3 shadow-md fixed top-0 left-0 z-50">
//           <div className="flex items-center gap-5">
//             <img src='https://cdn3d.iconscout.com/3d/premium/thumb/notebook-3d-icon-png-download-4719147.png' 
//               className="h-15 w-15 rounded-2xl object-cover" />
//             <h1 className="font-bold text-4xl text-black font-serif tracking-wider ">NotesDeck</h1>
//           </div>
//           <div className="relative items-center flex  justify-center">
//             <EllipsisVertical size={30} onClick={()=>{setMoreVisible(!moreVisible)}} className={`cursor-pointer ${moreVisible?'bg-gray-400 rounded-full p-1':''}`} /> 
//             {moreVisible && (<div onClick={() => {
//              notes.length>0? setShowDeleteAllDialog(true):toast.info('No notes to delete!')
//               setMoreVisible(!moreVisible)
//              }} className={`absolute top-8 right-5 w-55 p-5  gap-4 cursor-pointer   bg-red-500 text-white flex items-center  font-bold rounded-2xl shadow-lg`}><Trash2 />  <div>Delete All Notes</div> </div>)}
//             </div>
//         </div>
//         <form className=" rounded-2xl px-10 py-10 lg:w-1/2 flex flex-col text-white" onSubmit={(e) => { handleSubmit(e) }}>
//           {/* Title input with counter */}
//           <div className="relative mb-5 ">
//             <h1 className="text-4xl font-medium mb-5">{editing ? ('Updating Note...') : ('Add Notes')}</h1>
//             <input
//               maxLength={maxLength}
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-5 py-5 border-2 rounded-2xl border-white text-4xl font-medium  focus:outline-none"
//               type="text"
//               placeholder="Enter Title"
//             />
//             <span className="absolute bottom-2 right-4 text-sm text-gray-400">
//               {title.length}/{maxLength}
//             </span>
//           </div>

//           <div className="rounded-xl border-2 border-gray-300 overflow-hidden h-40 mb-5">
//             <textarea
//               value={details}
//               onChange={(e) => setDetails(e.target.value)}
//               placeholder="Enter Details"
//               className="w-full h-full p-3 resize-none border-none outline-none overflow-y-auto"
//             ></textarea>
//           </div>


//           {/* Button */}
//           <button

//             type="submit"
//             className="bg-white text-black font-bold text-5xl py-5 rounded-2xl active:bg-gray-300 active:scale-95 cursor-pointer "
//           >
//             {editing ? ('Update Note') : ('Add Note')}
//           </button>
//           {editing ? (<div

//             onClick={() => {
//               handleCancel()

//             }}
//             className="mt-3 bg-red-700 text-white font-bold text-5xl py-5 rounded-2xl active:bg-gray-300 active:scale-95 cursor-pointer justify-center items-center flex"
//           >
//             <h1>Cancel Update</h1>
//           </div>) : ('')}

//         </form>

//         <div className="lg:w-1/2 p-5 h-full overflow-y-auto lg:border-l-2 flex flex-col">
//           <h1 className="text-4xl font-medium mb-5 mt-2">Your Notes</h1>
          
//           {notes.length === 0 ? (
//             // Centered message when no notes
//             <div className="flex-grow flex items-center justify-center">
//               <p className="text-gray-400 text-xl text-center">No notes available.</p>
//             </div>
//           ) : (
//             <div className="gap-5 flex flex-wrap mt-5 justify-start">
//               {notes.map((e, i) => (
//                 <div
//                   key={i}
//                   className="h-64 w-60  rounded-2xl bg-cover bg-white p-3 text-black shadow-md relative border-green-400 border-4 "
//                 >
//                   <div className="flex gap-2 justify-between items-center  ">
//                     <h1 className=" font-bold text-2xl truncate">{e.title}</h1>


//                   </div>

//                   <p className="h-40 overflow-y-auto text-gray-500 text-sm  underline whitespace-pre-wrap mb-2">{e.details}</p>
//                   <div className={` absolute bottom-0 right-0   mt-2.5 h-10 w-full p-3  rounded-b-[12px] ${editingIndex === i ? "bg-red-400" : "bg-green-400"} transition-all duration-300  flex items-center justify-center gap-5 `}>
//                     {editingIndex === i ? (<div className="text-white">Updating Note</div>) : (<><Trash2
//                       onClick={() => {
//                         setShowDialog(true);
//                         setDeleteIndex(i);
//                         // handleDelete(i);
//                       }}
//                       className=" active:scale-95 cursor-pointer"
//                       color="white"
//                       size={20}

//                     />
//                       <Pencil
//                         onClick={() => {
//                           handleEdit(e, i)
//                         }}
//                         className=" active:scale-95 cursor-pointer" color="white"
//                         size={20} /></>)}

//                   </div>
//                 </div>
//               ))}
//               {showDialog && (
//                 <div className="fixed inset-0 bg-black/50 flex items-center justify-center ">
//                   <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
//                     <h2 className="text-lg font-semibold text-gray-800">Delete Note?</h2>
//                     <p className="text-gray-500 mt-2">Are you sure you want to delete this note?</p>

//                     <div className="flex justify-center gap-4 mt-6">
//                       <button
//                         onClick={() => {
//                           handleDelete(deleteIndex)

//                         }}
//                         className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//                       >
//                         Yes, Delete
//                       </button>

//                       <button
//                         onClick={() => setShowDialog(false)}
//                         className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
                

//             </div>
//           )}
//         </div>
//         {showDeleteAllDialog && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center ">
//             <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
//               <h2 className="text-lg font-semibold text-gray-800">Delete All Note?</h2>
//               <p className="text-gray-500 mt-2">Are you sure you want to delete all notes?</p>

//               <div className="flex justify-center gap-4 mt-6">
//                 <button
//                   onClick={() => {
//                     handleDeleteAll()

//                   }}
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//                 >
//                   Yes
//                 </button>

//                 <button
//                   onClick={() => setShowDeleteAllDialog(false)}
//                   className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}



//       </div>
//   </>
    
    
    
//   );
// };

// export default App;



import { useState } from "react";
import { Trash2, Pencil, EllipsisVertical } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import { Toaster, toast } from "sonner";

const App = () => {
  const maxLength = 100;
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [notes, setNotes] = useState([]);

  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [moreVisible, setMoreVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return toast.warning("Please add note title");
    if (!details.trim()) return toast.warning("Please add note details");

    if (editing) {
      const copyNotes = [...notes];
      copyNotes[editingIndex] = { ...copyNotes[editingIndex], title, details };
      setNotes(copyNotes);
      setTitle("");
      setDetails("");
      setEditingIndex(null);
      setEditing(false);
      toast.success("Note updated!");
      return;
    }

    setNotes([...notes, { title, details }]);
    setTitle("");
    setDetails("");
    toast.success("Note saved!");
  };

  const handleDelete = (indexToDelete) => {
    const copyNotes = [...notes];
    copyNotes.splice(indexToDelete, 1);
    setNotes(copyNotes);
    setShowDialog(false);
    setDeleteIndex(null);
    toast.success("Note deleted!");
  };

  const handleEdit = (note, index) => {
    setTitle(note.title);
    setDetails(note.details);
    setEditing(true);
    setEditingIndex(index);
  };

  const handleCancel = () => {
    setTitle("");
    setDetails("");
    setEditing(false);
    setEditingIndex(null);
  };

  const handleDeleteAll = () => {
    setNotes([]);
    setTitle("");
    setDetails("");
    setEditing(false);
    setEditingIndex(null);
    setShowDeleteAllDialog(false);
    toast.success("All notes deleted!");
  };

  return (
    <>
      <Toaster position="top-right" richColors duration={2000} />

      {/* Main container */}
      <div className="min-h-screen bg-black text-white pt-20 lg:flex lg:items-start relative">

        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full bg-green-300 text-black flex justify-between items-center px-5 py-3 shadow-md z-50">
          <div className="flex items-center gap-3 sm:gap-2">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/notebook-3d-icon-png-download-4719147.png"
              alt="logo"
              className="h-10 w-10 sm:h-8 sm:w-8 rounded-xl object-cover"
            />
            <h1 className="font-bold text-xl sm:text-lg tracking-wide">NotesDeck</h1>
          </div>
          <div className="relative flex items-center justify-center">
            <EllipsisVertical
              size={24}
              onClick={() => setMoreVisible(!moreVisible)}
              className={`cursor-pointer ${moreVisible ? "bg-gray-400 rounded-full p-1" : ""}`}
            />
            {moreVisible && (
              <div
                onClick={() => {
                  notes.length > 0 ? setShowDeleteAllDialog(true) : toast.info("No notes to delete!");
                  setMoreVisible(false);
                }}
                className="absolute top-8 right-0 w-44 sm:w-36 p-3 gap-2 cursor-pointer bg-red-500 text-white flex items-center font-bold rounded-xl shadow-lg"
              >
                <Trash2 size={18} />
                <div className="text-sm sm:text-xs">Delete All Notes</div>
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        <form
          className="rounded-2xl px-5 py-5 lg:w-1/2 flex flex-col text-white mb-5"
          onSubmit={handleSubmit}
        >
          <div className="relative mb-5">
            <h1 className="text-2xl sm:text-xl font-medium mb-3">{editing ? "Updating Note..." : "Add Notes"}</h1>
            <input
              maxLength={maxLength}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Title"
              className="w-full px-3 py-2 sm:py-1 border-2 rounded-xl border-white text-xl sm:text-base font-medium focus:outline-none"
            />
            <span className="absolute bottom-1 right-2 text-sm text-gray-400">
              {title.length}/{maxLength}
            </span>
          </div>

          <div className="rounded-xl border-2 border-gray-300 overflow-hidden h-32 sm:h-28 mb-5">
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter Details"
              className="w-full h-full p-2 sm:p-1 resize-none border-none outline-none overflow-y-auto text-sm sm:text-xs"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-white text-black font-bold py-3 sm:py-2 rounded-xl text-xl sm:text-base active:bg-gray-300 active:scale-95 transition"
          >
            {editing ? "Update Note" : "Add Note"}
          </button>

          {editing && (
            <div
              onClick={handleCancel}
              className="mt-3 bg-red-700 text-white font-bold py-3 sm:py-2 rounded-xl text-xl sm:text-base active:bg-gray-300 active:scale-95 cursor-pointer flex justify-center items-center transition"
            >
              Cancel Update
            </div>
          )}
        </form>

        {/* Notes */}
        <div className="lg:w-1/2 p-3 sm:p-2 h-full overflow-y-auto lg:border-l-2 flex flex-col">
          <h1 className="text-2xl sm:text-xl font-medium mb-3 mt-2">Your Notes</h1>

          {notes.length === 0 ? (
            <div className="flex-grow flex items-center justify-center">
              <p className="text-gray-400 text-center text-sm sm:text-xs">No notes available.</p>
            </div>
          ) : (
            <div className="gap-3 flex flex-wrap mt-3 justify-start">
              {notes.map((e, i) => (
                <div
                  key={i}
                  className="h-48 sm:h-36 w-52 sm:w-40 rounded-2xl bg-white p-3 text-black shadow-md relative border-green-400 border-2"
                >
                  <div className="flex gap-2 justify-between items-center">
                    <h1 className="font-bold text-lg sm:text-sm truncate">{e.title}</h1>
                  </div>

                  <p className="h-28 sm:h-20 overflow-y-auto text-gray-500 text-xs sm:text-[10px] whitespace-pre-wrap mb-2 underline">
                    {e.details}
                  </p>

                  <div
                    className={`absolute bottom-0 right-0 mt-2 h-8 w-full p-2 rounded-b-xl ${editingIndex === i ? "bg-red-400" : "bg-green-400"
                      } transition-all duration-300 flex items-center justify-center gap-3`}
                  >
                    {editingIndex === i ? (
                      <div className="text-white text-xs sm:text-[10px]">Updating Note</div>
                    ) : (
                      <>
                        <Trash2
                          onClick={() => {
                            setShowDialog(true);
                            setDeleteIndex(i);
                          }}
                          className="cursor-pointer active:scale-95"
                          color="white"
                          size={18}
                        />
                        <Pencil
                          onClick={() => handleEdit(e, i)}
                          className="cursor-pointer active:scale-95"
                          color="white"
                          size={18}
                        />
                      </>
                    )}
                  </div>
                </div>
              ))}

              {/* Delete Note Dialog */}
              {showDialog && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-lg p-5 w-72 text-center">
                    <h2 className="text-lg font-semibold text-gray-800">Delete Note?</h2>
                    <p className="text-gray-500 mt-2">Are you sure you want to delete this note?</p>
                    <div className="flex justify-center gap-3 mt-4">
                      <button
                        onClick={() => handleDelete(deleteIndex)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition text-sm"
                      >
                        Yes, Delete
                      </button>
                      <button
                        onClick={() => setShowDialog(false)}
                        className="bg-gray-300 text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Delete All Notes Dialog */}
        {showDeleteAllDialog && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-5 w-72 text-center">
              <h2 className="text-lg font-semibold text-gray-800">Delete All Notes?</h2>
              <p className="text-gray-500 mt-2">Are you sure you want to delete all notes?</p>
              <div className="flex justify-center gap-3 mt-4">
                <button
                  onClick={handleDeleteAll}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition text-sm"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowDeleteAllDialog(false)}
                  className="bg-gray-300 text-black px-3 py-1 rounded-lg hover:bg-gray-400 transition text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
