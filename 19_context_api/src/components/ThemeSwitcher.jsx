import { useContext, useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // icons — npm install lucide-react
import { ThemeDataContext } from "../context/ThemeContext";

const ThemeSwitch = () => {
    const [theme , setTheme]=useContext(ThemeDataContext)

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full 
                  border-2 border-gray-400 
                 flex items-center transition-all duration-500 
                 
                 p-1
                "
        >
            {/* Toggle circle */}
            <span
                className={`absolute top-1 left-1 w-5 h-5 rounded-full flex items-center justify-center 
                    bg-gray-400 text-black transition-all duration-500
                    ${theme === "dark" ? "translate-x-8 bg-yellow-400" : ""}`}
            >
                {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                ) : (
                    <Moon className="w-4 h-4 text-black" />
                )}
            </span>
        </button>
    );
};

export default ThemeSwitch;
