"use client"
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
import OutsideAlerter from "../OutSideDetecter";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
interface LogInProps{
  isVisible:any;
}
export default function Login(config:LogInProps) {
  
  return (
    <div className='w-full h-full absolute inset-0 bg-[#02020267] flex justify-center items-end phone:items-center z-30 phone:py-11'>
      <OutsideAlerter classOfIt="  rounded-xl shadow-lg w-full phone:w-[568px] h-full max-h-[680px]" setVisible={config.isVisible}>
        <motion.div initial={{y:'100%',opacity:0}}  animate={{y:0,opacity:1}} className='bg-white  rounded-xl shadow-lg w-full phone:w-[568px] h-full max-h-[680px] '>
          <div className="border-b py-4 flex items-center px-5 ">
            <div className="hover:bg-gray-100 p-2 cursor-pointer rounded-full" onClick={()=>config.isVisible(false)}><IoClose size="1.2rem" color="#262626" /></div>
            <div className="w-full flex justify-center">
            <span className="text-center font-semibold">Log in or sign up</span>
            </div>
          </div>
          <div className="flex flex-col gap-5 px-10 py-8">
            <div className="w-full flex justify-center items-center">
            <div className="text-2xl font-bold text-center">Welcome back</div>
            </div>
            <div className="flex flex-col gap-1">
                  <div className=" text-sm font-normal">
                    Email :
                  </div>
                  <Input
                      type="email"
                      placeholder="email@example.com"
                      className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                      labelProps={{
                        className: "hidden",
                      }}
                      containerProps={{ className: "min-w-[100px]" }} crossOrigin={undefined}/>                
            </div>
            <div className="flex flex-col gap-1">
                  <div className=" text-sm font-normal">
                    Password :
                  </div>
                   <Input
                type="password"
                placeholder="Password"
                
                className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }} crossOrigin={undefined}/>                
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full mt-6">
                <Button size="md" placeholder={undefined} className="w-full h-12 text-base">Sign in</Button>
              </div>
              <div className="flex gap-4 ">
                <Button size="md" placeholder={undefined} className="w-full h-14 text-base !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500"><img src="google.png" alt="Logo" className='hidden sm:inline h-5 w-5'/> </Button> 
                <Button size="md" placeholder={undefined} className="w-full h-14 text-base !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500"><img src="facebook.png" alt="Logo" className='hidden sm:inline h-5 w-5'/></Button>
              </div>
            </div>
            

          </div>
        </motion.div>
        </OutsideAlerter>
    </div>
  )
}
