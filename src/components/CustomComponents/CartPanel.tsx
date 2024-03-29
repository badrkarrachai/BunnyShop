import Image from 'next/image';
import React from 'react'
import { IoClose } from "react-icons/io5";
import OutsideAlerter from '../OutSideDetecter';
import { motion } from "framer-motion"
import { Button } from '@material-tailwind/react';
import Link from 'next/link';

interface CartPanelProps{
  isVisible:any;
}

function CartPanel(config:CartPanelProps) {
  return (
    <>
      <div className='w-full h-full fixed inset-0 backdrop-blur-sm bg-[#02020267] dark:bg-[#ffffff1a] flex justify-end items-end phone:items-center z-30 animate-Fade '>
        <OutsideAlerter classOfIt="rounded-xl w-full panel:w-auto flex panel:justify-end h-full " setVisible={config.isVisible}>
          <div className='h-full shadow-lg  bg-white dark:bg-[#161A1D] w-full panel:w-[550px]  animate-RightToLeft'>
            <div className='sm:px-8 px-5 pt-5 sm:pt-8'>
              <div className='border-b-2 dark:border-b-[#22262B] mt-[-1rem] py-4 flex justify-between items-center'>
                <h3 className='font-semibold text-lg dark:text-white'>Cart (1) </h3>
                <div onClick={()=>config.isVisible(false)}  className='hover:bg-gray-100 dark:hover:bg-[#ffffff13] p-1 cursor-pointer rounded-full'>
                  <div className='dark:hidden'><IoClose size="1.3rem" /></div>
                  <div className='dark:inline hidden'><IoClose color="#ffff" size="1.3rem" /></div>
                </div>
              </div>
            </div>
            <div className='px-2 w-full h-[calc(100%-263px)]'>
              <div className='overflow-y-scroll w-full h-full px-4 no-scrollbar'>
                  <CartItem image='/prodtest.jpg'/>
                  <CartItem image='/prodtest.jpg'/>
                  <CartItem image='/prodtest.jpg'/>
                  <CartItem image='/prodtest.jpg'/>
                  <CartItem image='/prodtest.jpg'/>
                  <CartItem image='/prodtest.jpg'/>  
                  <CartItem image='/prodtest.jpg'/>
                  <CartItem image='/prodtest.jpg'/>  
                  <CartItem image='/prodtest.jpg'/>
                  <CartItem image='/prodtest.jpg'/>
               
              </div>
            </div>
            <div className='sm:px-8 px-5  pt-4 flex gap-3 flex-col dark:text-[#DCDFE4]'>
              <div className='flex flex-col gap-2'>
                  <div className='flex justify-between items-center'>
                      <span>Shipping</span>
                      <span >Free</span>
                  </div>
                  <div className='flex justify-between items-center'>
                      <span >Transaction fee</span>
                      <span >$1.00</span>
                  </div>
                  <div className='flex justify-between items-center '>
                      <span className='text-[rgb(8,9,15)] dark:text-white font-medium' >Total</span>
                      <span className='text-[rgb(8,9,15)] dark:text-white font-medium'>$53.00</span>
                  </div>
              </div>
              <Link href={"/cart"}><Button size="md" placeholder={undefined} onClick={()=>config.isVisible(false)} style={{textTransform:"initial"}} className="w-full bg-[#B0926A] h-12 text-base">Continue to checkout</Button></Link>
            </div>

            <div className='flex justify-center items-center w-full mt-[-2rem] h-full flex-col text-[rgb(19,23,39)]'>
              <div className='sm:h-auto sm:w-auto w-40 h-40'><Image src={'/CartEmpty.png'} width={250} height={250} alt='Empty Cart Image'/></div>
              <div className='flex flex-col gap-2 justify-center items-center'>
                <h3 className='font-semibold text-xl dark:text-[#F1F2F4]'>Your cart is empty</h3>
                <p className='text-blue-gray-500 text-sm text-center dark:text-[#B3B9C4]'>Add items to your cart to check out</p>
              </div>
            </div>
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
      <div className='py-5 border-b-2 dark:border-b-[#22262B] flex gap-2 justify-between'>
        <div className='flex gap-4 justify-between w-full'>
          <div className='flex gap-4'>
            <Image src={config.image} width={110} className='rounded-lg' height={110} alt='prod'/>
            <div className='flex flex-col justify-between'>
              <div className='flex flex-col gap-1'>
                <h3 className='text-[rgb(8,9,15)] font-medium dark:text-[#F1F2F4]'>Nike shoes - model California designed by Apple</h3>
                <p className='text-sm text-gray-600 dark:text-[#B3B9C4] '>Shoes - Clothes</p>
              </div>
              <div className='hover:bg-gray-100 dark:hover:bg-[#2C333A] cursor-pointer active:bg-gray-300 w-[5.5rem] items-center flex justify-center rounded-full'>
                <div className='flex gap-1 hover:bg-gray-100 dark:hover:bg-[#2C333A] cursor-pointer dark:text-white active:bg-gray-300 w-20 rounded-full p-[0.3rem] items-center text-sm'>
                  <div className='dark:hidden'><IoClose size="1rem" color="rgb(117 117 117)" /></div>
                  <div className='dark:inline hidden'><IoClose size="1rem" color="#dbdbdb" /></div>
                  Remove
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-[rgb(8,9,15)] font-medium dark:text-[#F1F2F4]'>$149.99</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPanel