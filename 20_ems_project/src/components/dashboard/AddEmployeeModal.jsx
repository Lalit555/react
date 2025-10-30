import React, { useState } from "react";
import { Plus, X } from 'lucide-react'
import { useContext } from "react";
import { AppDataContext } from "../../context/AppContext";
import { Toaster, toast } from 'sonner'


const AddEmployeeModal = () => {
    const [currentUser, setCurrentUser, data, setData] =useContext(AppDataContext)
    


    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        password: "",
        profilePic:"",
        role:""
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
    const handleSubmit = (e) => {
        e.preventDefault();
       
       
        const len = Object.keys(data.employees).length;
        const empid = `emp_00${len + 1}`;

        const newEmployee = {
            [empid]: {
                id: empid,
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
                contactNumber: formData.contact,
                completedTasks: 0,
                progressTasks: 0,
                taskIds: [],
                profilePic: formData.profilePic,
                role: formData.role,
                joinedOn:getCurrentIST(),
                status:'Active'
            },
        };

        // ✅ Merge new employee into existing employees object
        const newData = {
            ...data,
            employees: {
                ...data.employees,
                ...newEmployee,
            },
        };

        // ✅ Update state (triggers re-render)
        setData(newData);

        // ✅ Save in localStorage
        localStorage.setItem("data", JSON.stringify(newData));

       


        setShowModal(false);
        toast.success('Employee Added Successfully')
       
        setFormData({ firstName: "", lastName: "", email: "", contact: "", password: "" });

    };

    return (
        <>
         <Toaster position="top-right" richColors duration={2000} />
            <div className="relative">
                {/* ✅ Add Employee Button */}
                <div className="bg-gray-600 p-3 rounded-full hover:bg-gray-500 cursor-pointer">
                    <Plus onClick={() => {
                        setShowModal(true)

                    }} />
                </div>

                {/* ✅ Modal Overlay */}
                {showModal && (
                    <div
                        className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50"
                        onClick={() => setShowModal(false)} // click outside to close
                    >
                        {/* ✅ Modal Box */}
                        <div
                            className="bg-gray-800 rounded-2xl p-8 sm:w-[600px] shadow-2xl relative border-white/60 border-2"
                            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-center text-white">
                                Add New Employee
                            </h2>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="border border-gray-300 rounded-lg px-3 py-2 placeholder:font-normal placeholder:text-[20px] focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:font-normal placeholder:text-[20px]"
                                    required
                                />
                                <input
                                    type="text"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                    placeholder="Developer, Designer, Tester"
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:font-normal placeholder:text-[20px]"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:font-normal placeholder:text-[20px]"
                                    required
                                />
                                <input
                                    type="text"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    placeholder="Contact Number"
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:font-normal placeholder:text-[20px]"
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:font-normal placeholder:text-[20px]"
                                    required
                                />
                                <input
                                    type="text"
                                    name="profilePic"
                                    value={formData.profilePic}
                                    onChange={handleChange}
                                    placeholder="Profile pic "
                                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:font-normal placeholder:text-[20px]"
                                    required
                                />

                                <button
                                    type="submit"
                                    className="bg-blue-600 text-white py-2 rounded-lg mt-2 hover:bg-blue-700 transition active:scale-95"
                                >
                                    Add Employee
                                </button>
                            </form>

                            {/* Close Button */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-3 right-3 text-gray-600 hover:bg-gray-700 p-2 text-sm rounded-full"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </>
            );
};

export default AddEmployeeModal;
