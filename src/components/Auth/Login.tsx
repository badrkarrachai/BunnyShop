"use client"
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
import OutsideAlerter from "../OutSideDetecter";
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
        </motion.div>
        </OutsideAlerter>
    </div>
  )
}
