"use client"
import { Button } from "@/components/Material"
import Link from "next/link";
import { usePathname } from "next/navigation";
import DropDown from '@/components/DropDown'
import { useState } from "react";
export default function Navbar() {
    const pathname = usePathname().split("/")[1];
    const [visible,setVisible]=useState(true);

  return (
    <>
    <div className='flex  items-center bg-white text-black  justify-between px-10 p-3 shadow-sm'>
        <img src="smile.png" alt="Logo" className='h-[45px] w-[45px]'/>
        <nav className='flex justify-center items-center gap-4 px-10'>
          <div className=''><NavItem curPath={pathname} to='/'>Home</NavItem></div>
          <NavItem curPath={pathname} to='/todayDeals'>Today's Deals</NavItem>
          <NavItem curPath={pathname} to='/giftCards'>Gift Cards</NavItem>
          <NavItem curPath={pathname} to='/sell'>Sell</NavItem>
          <NavItem curPath={pathname} to='/customerService'>Customer service</NavItem>
    </nav>
      <div className='flex justify-between items-center'>
          {/* search */}
          <div className='max-w-md'>
            <div className="relative flex items-center w-full h-12 rounded-xl focus-within:shadow-md bg-slate-50 overflow-hidden">
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

        <hr className="mr-8 ml-4 bg-gray-200 border-0 dark:bg-gray-300 h-2 w-px shadow-md"/>
        {/* sign in */}
          
          <div>
          <Button className="h-[2.6rem] flex items-center"  placeholder={undefined} onClick={()=>setVisible(true)}>
              Sign In
          </Button> 
          <DropDown setVisible={setVisible} visible={visible} items={ [ {display:"Log In",to:"/login"} , {display:"Sign Up",to:"/signUp"}] }/>       
          </div>
        
        
      </div>
    </div>
    
    </>
  )
}
interface NavItemProps {
    to: string;
    curPath: string;
    children: React.ReactNode;
  }
  
  const NavItem: React.FC<NavItemProps> = ({ to, curPath, children }) => {
    const isActive = curPath === to.slice(1); // Checking if the current path matches the link
    const activeClass = isActive
      ? "text-black font-medium"
      : "text-[#8b8b8b]";
  
    return (
     
        <Link
          href={to}
          className={`hover:bg-gray-200 rounded-3xl h-10 p-4 flex items-center justify-center ${activeClass}`}
        >
          {children}
        </Link>
      
    );
  };
