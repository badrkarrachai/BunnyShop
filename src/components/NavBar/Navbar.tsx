"use client"
import { Button } from "@/components/Material"
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropDown from '@/components/DropDown'
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import blankImage from "/public/blankimage.png"
import Image from "next/image";
import NaveBarItems from "./NavbarItems";

export default function Navbar() {
    const pathname = usePathname().split("/")[1];
    const [visible,setVisible]=useState(false);

  return (
    <>
    <div className='flex flex-col sm:gap-6 items-center bg-white text-black  justify-between px-2 sm:px-10 py-3 border-b'>
      <div className="flex justify-between w-full">
      <img src="smile.png" alt="Logo" className='hidden sm:inline h-[45px] w-[45px] cursor-pointer'/>
      <NaveBarItems type="0" classNav="hidden text-sm new:text-base xl:flex justify-center items-center new:gap-4 gap-2 px-10"/>
      <div className='flex justify-between items-center w-full md:w-auto '>
          {/* search */}
          <div className='w-full nav:max-w-md sm:ml-5 nav:ml-0'>
            <div className="relative flex items-center w-full h-12 rounded-xl focus-within:shadow-md border bg-slate-50 overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300 bg-slate-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-slate-50"
                type="text"
                id="search"
                placeholder="Search" /> 
            </div>
          </div>

        <hr className="mr-2 ml-2 sm:mr-8 sm:ml-4 bg-gray-200 border-0 dark:bg-gray-300 h-8 w-px shadow-md"/>
        {/* sign in */}
          
          <div>

            <ProfileButton clickEvent={setVisible}/>
            <DropDown setVisible={setVisible} visible={visible} items={ [ {display:"Log In",to:"/login"} , {display:"Sign Up",to:"/signUp"}] }/>       
          </div>
      </div>
      </div>
       <NaveBarItems type="0" classNav="hidden md:flex xl:hidden justify-center items-center gap-4  mb-3"/>
    </div>
    
    </>
  )
}

interface ProfileButtonProps{
  clickEvent:any;
}

function ProfileButton(config: ProfileButtonProps){
  return(
    <div onClick={()=>config.clickEvent(true)} className="bg-white w-24 cursor-pointer hover:shadow-md border rounded-full flex items-center justify-center gap-3 px-3 p-2">
      <IoMenuOutline size={"1.5rem"} />
      <img src="blankimage.jpg" className="rounded-full h-[30.6px] w-[30.6px]" alt="Profile Pic" />
    </div>
  )
}
