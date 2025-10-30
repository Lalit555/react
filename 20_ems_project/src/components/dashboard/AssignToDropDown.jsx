import React, { useState, useContext, useEffect, useRef } from "react";
import { AppDataContext } from "../../context/AppContext";


const AssignToDropdown = ({assignedTo,onSelect} ) => {
    const [currentUser, setCurrentUser, data, setData] = useContext(AppDataContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const dropdownRef = useRef(null);

    const employees = data.employees || [];

    // Close dropdown if click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (emp) => {
        setSelectedEmployee(emp);
        onSelect(emp.id); // Pass selected employee to parent
        setShowDropdown(false);
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <div
                onClick={() => setShowDropdown((prev) => !prev)}
                className={`w-full pl-10 pr-3 py-2 rounded-lg ${assignedTo ? 'bg-gray-800' : 'bg-gray-800'} text-white/60 placeholder-gray-400 
               border border-white/40 focus:border-white/60 focus:border-2  focus:text-white
               focus:outline-none transition-all duration-300 flex items-center`}
            >
                {assignedTo ? (
                    <div className="flex items-center gap-2">
                        <img
                            src={selectedEmployee.profilePic}
                            alt="profile"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="font-medium">
                            {selectedEmployee.firstName} {selectedEmployee.lastName}
                        </span>
                    </div>
                ) : (
                        <span className=" text-white/60 placeholder-gray-400 ">Select Employee</span>
                )}
                <svg
                    className="w-4 h-4 text-gray-500 mx-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {showDropdown && (
                <div className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg">
                    {Object.entries(employees).map(([id,emp]) => (
                        <div
                            key={id}
                            onClick={() => handleSelect(emp)}
                            className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
                        >
                            <img
                                src={emp.profilePic}
                                alt="profile"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-medium text-gray-800">
                                    {emp.firstName} {emp.lastName}
                                </p>
                                <p className="text-sm text-gray-500">{emp.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AssignToDropdown;
