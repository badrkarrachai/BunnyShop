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
      <div className='w-full h-full fixed inset-0 backdrop-blur-sm bg-[#02020267] flex justify-end items-end phone:items-center z-30 animate-Fade '>
        <OutsideAlerter classOfIt="rounded-xl w-full panel:w-auto flex panel:justify-end h-full " setVisible={config.isVisible}>
          <div className='h-full shadow-lg  bg-white w-full panel:w-[550px] p-8 animate-RightToLeft'>
            <div className='border-b-2 mt-[-1rem] py-4 flex justify-between items-center'>
              <h3 className='font-semibold text-lg'>Cart </h3>
              <div onClick={()=>config.isVisible(false)}  className='hover:bg-gray-100 p-1 cursor-pointer rounded-full'><IoClose size="1.3rem" /></div>
            </div>
            <div>
              <CartItem image='/prodtest.jpg'/>
            </div>
            {/* <div className='flex justify-center items-center w-full mt-[-2rem] h-full flex-col text-[rgb(19,23,39)]'>
              <div className='sm:h-auto sm:w-auto w-40 h-40'><Image src={'/CartEmpty.png'} width={250} height={250} alt='Empty Cart Image'/></div>
              <div className='flex flex-col gap-2 justify-center items-center'>
                <h3 className='font-semibold text-xl'>Your cart is empty</h3>
                <p className='text-blue-gray-500 text-sm text-center'>Add items to your cart to check out</p>
              </div>
            </div> */}
          </div>
        </OutsideAlerter>
      </div>
      
    </>
  )
}

interface CartItemProps{
  image: string,
  // title: string,
  // price:string,
  // category:string,
}

function CartItem(config:CartItemProps) {
  return(
    <>
      <div className='py-6 border-b-2 flex gap-2 justify-between'>
        <div className='flex gap-4 justify-between w-full'>
          <div className='flex gap-4'>
            <Image src={config.image} width={110} className='rounded-lg' height={110} alt='prod'/>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col gap-1'>
                <h3 className='text-[rgb(8,9,15)] font-medium'>Nike shoes - model </h3>
                <p className='text-sm text-gray-600'>Shoes - Clothes</p>
              </div>
              <div className='hover:bg-gray-100 cursor-pointer active:bg-gray-300 w-[5.5rem] items-center flex justify-center rounded-full'>
                <div className='flex gap-1 hover:bg-gray-100 cursor-pointer active:bg-gray-300 w-20 rounded-full p-[0.3rem] items-center text-sm'>
                  <IoClose size="1rem" color="rgb(117 117 117)" />
                  Remove
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-[rgb(8,9,15)] font-medium'>$149.99</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPanel