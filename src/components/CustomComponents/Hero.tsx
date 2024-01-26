"use client"
import { Button } from "@material-tailwind/react";

export default function Hero() {
  return (
    <div className='w-full  flex justify-center items-center flex-col gap-6 my-24 animate-DownToUp'>
      <div className='text-6xl font-bold text-center text-[rgb(19,23,39)] max-w-[49rem] '>Your marketplace for high quality <span className='text-[#B0926A]'>products</span></div>
      <p className='max-w-[44rem] text-blue-gray-500 text-center'>Welcome to Bunnyshop. Every product on our platform is verified by our team to ensure our highest quality standards</p>
      <div className="flex justify-center gap-4">
        <Button size="md" placeholder={undefined} style={{textTransform:"initial"}} className="w-44 bg-[#B0926A] h-12 text-base">Browse trending</Button>
        <Button style={{textTransform:"initial"}} placeholder={undefined} variant="text" className="flex text-sm items-center gap-2">
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
