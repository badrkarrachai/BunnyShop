"use client"
import { Button } from "@material-tailwind/react";

export default function Hero() {
  return (
    <div className='w-full  flex justify-center items-center flex-col gap-6 my-24 animate-DownToUp md:px-3 px-2 '>
      <div className='sm:text-6xl text-4xl font-bold text-center text-[rgb(19,23,39)] md:max-w-[49rem] dark:text-white'>Your store for high quality <span className='text-[#B0926A]'>products</span></div>
      <p className='md:max-w-[44rem] text-blue-gray-500 text-center dark:text-[#B3B9C4]'>Welcome to Bunnyshop. Every product on our platform is verified by our team to ensure our highest quality standards</p>
      <div className="flex justify-center items-center gap-4 md:flex-row flex-col">
        <Button size="md" placeholder={undefined} style={{textTransform:"initial"}} className="w-48 bg-[#B0926A] h-12 text-base">Browse trending</Button>
        <Button style={{textTransform:"initial"}} placeholder={undefined} variant="text" className="flex text-sm items-center gap-2 dark:text-[#ecf0f5] dark:hover:bg-[#ffffff13]">
            Our quality promise{" "}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
            </svg>
        </Button>
      </div>
    </div>
  )
}
