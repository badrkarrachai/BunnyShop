"use client"
import { Button } from "@/components/Material"
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropDown from '@/components/DropDown'
import { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import blankImage from "/public/blankimage.png"
import Image from "next/image";
import NaveBarItems from "./NavbarItems";
import Cookies from 'universal-cookie';
import { LuShoppingCart } from "react-icons/lu";
import CartPanel from "../CustomComponents/CartPanel";
import ThemeProvider from "../ThemeProvider";



export default function Navbar() {
    const pathname = usePathname().split("/")[1];
    const [visible,setVisible]=useState(false);
    const [firstVisite,FirstVisite] = useState(true);
    const cookies = new Cookies();
  
    useEffect(() => {
      // Check if the user has a specific cookie
      const hasVisitedBefore = cookies.get('visitedBefore');
  
      if (hasVisitedBefore) {
        // User has visited before
        FirstVisite((prv)=> prv = false);
      } else {
        // User is visiting for the first time
        FirstVisite((prv)=> prv = true);
        
        
      }
    }, []);
    const[CratPanelActive,setCartPanelActive] = useState(false);
  return (
    <>
    {CratPanelActive && <CartPanel isVisible={setCartPanelActive}/>}
    <div className='flex justify-center items-center w-full'>
    <div className='flex flex-col w-full max-w-[100rem] sm:gap-6 items-center bg-white dark:bg-[#161A1D] dark:border-[#22262B] text-black  justify-between px-2 sm:px-10 py-3 border-b-2 '>
      <div className="flex justify-between w-full">
      <Link href={"/"}><img src="smile.png" alt="Logo" className='hidden sm:inline h-[45px] w-[45px] cursor-pointer'/></Link>
      <NaveBarItems type="0" classNav="hidden text-sm new:text-base navBarProtect:flex justify-center items-center new:gap-4 gap-2 px-0"/>
      <div className='flex justify-between items-center w-full md:w-auto '>
          {/* search */}
          <div className='w-full nav:max-w-md sm:ml-5 nav:ml-0 group'>
            <div className="relative flex items-center w-full h-12 rounded-xl focus-within:shadow-md border dark:border-[#22262B]  bg-slate-50 overflow-hidden">
                <div className="grid place-items-center h-full w-12 dark:group-hover:bg-[#2C333A] dark:bg-[#1D2125] text-gray-500 bg-slate-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                className="peer h-full w-full outline-none dark:text-white dark:group-hover:bg-[#2C333A] dark:bg-[#1D2125] text-sm text-gray-700 pr-2 bg-slate-50"
                type="text"
                id="search"
                placeholder="Search" /> 
            </div>
          </div>

        <hr className="mr-2 ml-2 sm:mr-8 sm:ml-4 bg-gray-200 border-0 dark:bg-[#22262B]  h-8 w-px shadow-md"/>
        {/* sign in and cart */}
          
        <div className="flex gap-2 items-center">
          <ThemeProvider/>
          <div onClick={()=>setCartPanelActive(true)} className="bg-white  dark:bg-[#1D2125] w-[3.2rem] hidden  cursor-pointer hover:shadow-md border dark:border-[#22262B] dark:hover:bg-[#2C333A] rounded-full sm:flex items-center justify-center gap-3 px-2 p-4">
            <div className="dark:hidden"><LuShoppingCart color="rgb(43,43,44)"  /></div>
            <div className="dark:inline hidden"><LuShoppingCart color="#ffff"  /></div>
            <div className="hidden h-2 w-2 mt-[-20px] mr-[-20px] bg-red-400 rounded-full absolute"></div>
          </div>

          <div>
            <ProfileButton clickEvent={setVisible}/>
            <DropDown setCartPanelActive={setCartPanelActive} setVisible={setVisible} visible={visible} firstVisite={firstVisite} items={ firstVisite === true?[   {display:"Sign Up",to:"/signUp"},{display:"Log In",to:"/login"}]: [ {display:"Log In",to:"/login"} , {display:"Sign Up",to:"/signUp"}] }/>       
          </div>
        </div>
      </div>
      </div>
       <NaveBarItems type="0" classNav="hidden md:flex navBarProtect:hidden justify-center items-center gap-4  mb-3"/>
    </div>
    </div>
    </>
  )
}

interface ProfileButtonProps{
  clickEvent:any;
}

function ProfileButton(config: ProfileButtonProps){
  return(
    <div onClick={()=>config.clickEvent(true)} className="bg-white dark:bg-[#1D2125] dark:border-[#22262B] dark:hover:bg-[#2C333A] w-24 cursor-pointer hover:shadow-md border rounded-full flex items-center justify-center gap-3 px-3 p-2">
      <div className="dark:hidden"><IoMenuOutline size={"1.5rem"} /></div>
      <div className="dark:inline hidden"><IoMenuOutline size={"1.5rem"} color="#ffff" /></div>
      <img src="blankimage.jpg" className="rounded-full h-[30.6px] w-[30.6px]" alt="Profile Pic" />
    </div>
  )
}

