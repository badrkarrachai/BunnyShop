import Image from 'next/image';
import React from 'react'
import { IoClose } from "react-icons/io5";
import OutsideAlerter from '../OutSideDetecter';
import { motion } from "framer-motion"

interface CartPanelProps{
  isVisible:any;
}

function CartPanel(config:CartPanelProps) {
  return (
    <>
      <div className='w-full h-full fixed inset-0 bg-[#02020267] flex justify-end items-end phone:items-center z-30 '>
        <OutsideAlerter classOfIt="rounded-xl  shadow-lg w-auto flex justify-end h-full " setVisible={config.isVisible}>
          <motion.div initial={{x:'100%',opacity:0}} animate={{x:0,opacity:1}} className='h-full shadow-lg  bg-white  w-[550px] p-8'>
            <div className='border-b-2 mt-[-1rem] py-4 flex justify-between items-center'>
              <h3 className='font-semibold text-lg'>Cart </h3>
              <div onClick={()=>config.isVisible(false)}  className='hover:bg-gray-100 p-1 cursor-pointer rounded-full'><IoClose size="1.3rem" /></div>
            </div>
            <div className='flex justify-center items-center w-full mt-[-2rem] h-full flex-col text-[rgb(19,23,39)]'>
              <div ><Image src={'/CartEmpty.png'} width={250} height={250} alt='Empty Cart Image'/></div>
              <div className='flex flex-col gap-2 justify-center items-center'>
                <h3 className='font-semibold text-xl'>Your cart is empty</h3>
                <p className='text-blue-gray-500 text-sm text-center'>Add items to your cart to check out</p>
              </div>
            </div>
          </motion.div>
        </OutsideAlerter>
      </div>
      
    </>
  )
}

export default CartPanel