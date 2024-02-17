"use client"
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
import OutsideAlerter from "../OutSideDetecter";
import { Input } from "@/components/ui/input"
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import Cookies from 'universal-cookie';


interface LogInProps{
  isVisible:any;
}
export default function Login(config:LogInProps) {

  const cookies = new Cookies();
  const MakeitAvisited = ()=> {
    // Set a cookie to indicate that the user has visited
    cookies.set('visitedBefore', true, { path: '/' });
  };
  return (
    <div className='w-full h-full fixed inset-0 backdrop-blur-sm bg-[#02020267] dark:bg-[#ffffff1a] flex justify-center items-end phone:items-center z-30 phone:py-11'>
      <OutsideAlerter classOfIt="  rounded-xl shadow-lg w-full phone:w-[568px] h-auto max-h-[700px]" setVisible={config.isVisible}>
        <motion.div initial={{y:'100%',opacity:0}}  animate={{y:0,opacity:1}} className='bg-white dark:bg-[#161A1D] rounded-xl shadow-lg w-full phone:w-[568px] h-full max-h-[700px] '>
          <div className="border-b dark:border-b-[#22262B] py-4 flex items-center px-5 ">
            <div className="hover:bg-gray-100 p-2 cursor-pointer rounded-full" onClick={()=>config.isVisible(false)}>
              <div className="dark:hidden"><IoClose size="1.2rem" color="#262626" /></div>
              <div className="dark:inline"><IoClose size="1.2rem" color="#e7e7e7" /></div>
            </div>
            <div className="w-full flex justify-center">
            <span className="text-center font-semibold dark:text-white ">Log in or sign up</span>
            </div>
          </div>
          <div className="flex flex-col gap-5 px-6 sm:px-10 py-4 sm:py-10">

            <div className="text-2xl font-medium text-gray-900 dark:text-white">Welcome to BunnyShop</div>

            <div className="flex flex-col gap-1">
                  <div className=" text-sm font-normal dark:text-white">
                    Email :
                  </div>
                  <Input className="dark:hover:bg-[#2C333A] dark:bg-[#1D2125] dark:border-[#22262B]" type="email" placeholder="Example@example.com" />              
            </div>
            <div className="flex flex-col gap-1">
                  <div className=" text-sm font-normal dark:text-white">
                    Password :
                  </div>
                  <Input className="dark:hover:bg-[#2C333A] dark:bg-[#1D2125] dark:border-[#22262B] dark:outline-none" type="password" placeholder="*******" />
                  
            </div>
            <div className="w-full flex justify-end"><span className="underline text-sm cursor-pointer text-gray-600 dark:text-[#B3B9C4] dark:hover:text-white hover:text-black" >Forget password?</span> </div>
            
            <div className="flex flex-col gap-5">
              <div className="w-full ">
                <Button size="md" placeholder={undefined} className="w-full font-semibold bg-[#B0926A] h-12 text-base" style={{textTransform:"initial"}} onClick={MakeitAvisited}>Sign in</Button>
              </div>
              <div className="flex gap-4 flex-col sm:flex-row ">
                <Button size="md" placeholder={undefined} className="w-full h-14 text-base !border !border-gray-300 bg-white dark:bg-[#31313156] dark:!border-[#22262B] text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500"><img src="google.png" alt="Logo" className='inline h-5 w-5'/> </Button> 
                <Button size="md" placeholder={undefined} className="w-full h-14 text-base !border !border-gray-300 bg-white text-gray-900 shadow-lg dark:bg-[#31313156] dark:!border-[#22262B] shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500"><img src="facebook.png" alt="Logo" className='inline h-5 w-5'/></Button>
              </div>
              <div className="flex w-full items-center">
                <hr className="border w-full dark:border-[#22262B]"></hr><span className="w-28 flex justify-center items-center text-gray-700 dark:text-[#B3B9C4]">OR</span><hr className="border w-full dark:border-[#22262B]"></hr>
              </div>
              <Button size="md" placeholder={undefined} className="w-full h-12 text-base font-semibold bg-[#E8EAEF] dark:bg-[#e8eaefd5] text-black" style={{textTransform:"initial"}} onClick={MakeitAvisited}>Continue as seller</Button>
            </div>
            

          </div>
        </motion.div>
        </OutsideAlerter>
    </div>
  )
}