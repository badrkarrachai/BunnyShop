"use client"
import React, { useEffect, useState } from "react"
import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function ThemeProvider() {
    const [theme, setTheme] = useState(false);
    useEffect(()=>{
        const theme = localStorage.getItem("theme");
        if (theme === "dark") setTheme(true);
    },[])
    
    useEffect(()=>{
        if(theme){
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme","dark");
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme","light");
        }
    },[theme])
    return (
        <div onClick={()=>setTheme(!theme)} className="bg-white  dark:bg-[#1D2125] w-[3.2rem]  cursor-pointer hover:shadow-md border dark:border-[#22262B] dark:hover:bg-[#2C333A] rounded-full flex items-center justify-center gap-3 px-2 p-4">
            <div className="dark:hidden"><MdOutlineDarkMode  color="rgb(43,43,44)"  /></div>
            <div className="dark:inline hidden"><MdOutlineWbSunny color="#ffff" /></div>
            <div className="hidden h-2 w-2 mt-[-20px] mr-[-20px] bg-red-400 rounded-full absolute"></div>
        </div>
    )
}
