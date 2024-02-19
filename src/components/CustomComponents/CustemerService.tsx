"use client"
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { FaHeadset } from "react-icons/fa6";

export default function CustemerService() {
  return (
    <>
        <div className="flex flex-col-reverse lg:flex-row gap-4 sm:gap-16 items-center max-w-[100rem] w-full my-14 px-2 sm:px-10">
            <div className=" w-full lg:w-[50%] lg:text-start text-center space-y-8">
                <div className="lg:justify-start justify-center lg:items-start items-center flex">
                    <div className="rounded-full text-[#B0926A] bg-[#ffecd48e] dark:bg-[#ffecd4] p-3 px-4 font-semibold">#1 CUSTOMER SERVICE</div>
                </div>
                <h3 className="font-poppins font-semibold text-4xl md:text-6xl dark:text-[#ecf0f5] text-[rgb(19,23,39)] w-full lg:max-w-[35rem] md:leading-[4.3rem]">Special customer service for your<span className="text-[#B0926A]"> Needs</span></h3>
                <p className="text-blue-gray-500 dark:text-[#B3B9C4] lg:max-w-[35rem]">Our customer service strives for excellence, providing swift resolutions with a smile, ensuring every interaction leaves a lasting impression of satisfaction.</p>
                <div className="flex  lg:justify-start justify-center lg:items-start items-center gap-4 md:flex-row flex-col">
                    <Button size="md" placeholder={undefined} style={{textTransform:"initial"}} className="w-48 bg-[#B0926A] h-12 text-base">Ask for support</Button>
                    <Button style={{textTransform:"initial"}} placeholder={undefined} variant="text" className="flex text-sm items-center gap-2 dark:text-[#ecf0f5] dark:hover:bg-[#ffffff13]">
                    Browse FAQ{" "}
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
            <div className="lg:w-[50%] w-[90%] flex justify-center items-center relative ">
                <Image src="/custmoerService1.png" width={700} height={700} alt="Hero image" />
            </div>
        </div>
    </>
  )
}

