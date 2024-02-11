"use client";
import { Button } from "@material-tailwind/react"
import Image from "next/image"
import { IoClose } from "react-icons/io5"

export default function page() {
    return (
      <>
        <div className="flex  justify-center items-center w-full">
            <div className="flex flex-col w-full max-w-[100rem] h-[calc(100vh+300px)] 1024px:h-[calc(100vh-60px)]  items-start  px-2 sm:px-10">
                <div className=" pt-14 1024px:w-1/2 w-full pr-6">
                    <h1 className="text-3xl font-semibold font-poppins">Shopping Cart</h1>
                    <div className="w-full pt-8 "></div>
                </div>

                

                <div className='flex w-full h-[calc(100%-190px)] gap-12 1024px:flex-row flex-col justify-between'>
                    

                    {/* <div className='flex justify-center w-[50%] h-full p-8 border-dashed border-2 items-center flex-col rounded-xl text-[rgb(19,23,39)]'>
                        <div className='sm:h-auto sm:w-auto w-40 h-40'><Image src={'/CartEmpty.png'} width={250} height={250} alt='Empty Cart Image'/></div>
                        <div className='flex flex-col gap-2 justify-center items-center'>
                            <h3 className='font-semibold text-xl'>Your cart is empty</h3>
                            <p className='text-blue-gray-500 text-sm text-center'>Whoops! nothing to show here yet</p>
                        </div>
                    </div> */}


                    <div className='overflow-y-scroll 1024px:w-1/2 w-full h-full border-t-2 no-scrollbar'>
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
                        <CartItem image='/prodtest.jpg'/>
                    </div>
                    <div className=" 1024px:w-[42%] w-full h-[22.6rem] px-4 ">
                        <div className="bg-[#F9FAFE] w-full h-full p-10">
                            <div><h3 className="text-xl font-semibold">Order summary</h3></div>
                            <div className="flex-col flex w-full">
                                <div className="flex w-full mt-9 justify-between items-center pb-4 border-b-2 text-sm">
                                    <p className="text-gray-600">Subtotal</p>
                                    <p className="text-[rgb(19,23,39)] font-semibold">$49.73</p>
                                </div>
                                <div className="flex w-full mt-4 justify-between items-center pb-4 border-b-2 text-sm">
                                    <p className="text-gray-600">Flat Transaction Fee</p>
                                    <p className="text-[rgb(19,23,39)] font-semibold">$2.00</p>
                                </div>
                                <div className="flex w-full mt-4 justify-between items-center pb-4 text-base">
                                    <p className="text-[rgb(19,23,39)] font-semibold">Order total</p>
                                    <p className="text-[rgb(19,23,39)] font-semibold">$2.00</p>
                                </div>
                                <Button size="md" placeholder={undefined}  style={{textTransform:"initial"}} className="w-full mt-4 bg-[#B0926A] h-12 text-base">Checkout</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
        <div className="h-14"></div>
      
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
    <div className='py-5 border-b-2 flex gap-2 justify-between sm:pr-8'>
        <div className='flex gap-4 justify-between w-full'>
            <div className='flex gap-4'>
                <Image src={config.image} width={110} className='rounded-lg' height={110} alt='prod'/>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-[rgb(8,9,15)] font-medium max-w-[30rem]'>Nike shoes - model California   designed by Apple</h3>
                        <p className='text-sm text-gray-600'>Shoes - Clothes</p>
                    </div>
                    <div>
                        <h3 className='text-[rgb(8,9,15)] font-medium'>$149.99</h3>
                    </div>
                </div>
            </div>
        
            <div className='hover:bg-gray-100 cursor-pointer active:bg-gray-300 w-[2rem] h-[2rem] items-center flex justify-center rounded-full'>
                <div className='flex gap-1 hover:bg-gray-100 cursor-pointer active:bg-gray-300 w-20 rounded-full p-[0.3rem] items-center justify-center text-sm'>
                <IoClose size="1.3rem" color="rgb(117 117 117)" />
                </div>
            </div>
        </div>
    </div>
    </>
)
}