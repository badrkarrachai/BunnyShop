"use client"
import { Button } from "@material-tailwind/react";
export default function CustemerService() {
  return (
    <>
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center max-w-[100rem] w-full my-14 px-2 sm:px-10">
            <div className=" w-full lg:w-[50%] lg:text-start text-center space-y-8">
                <div className="lg:justify-start justify-center lg:items-start items-center flex"><div className="rounded-full text-[#B0926A] bg-[#ffecd4] p-3 font-medium max-w-[45rem]">#1 CHOICE OF BUSINESS FOUNDERS</div></div>
                <h3 className="font-poppins font-semibold text-4xl md:text-6xl dark:text-[#ecf0f5] text-[rgb(19,23,39)] w-full lg:max-w-[35rem] md:leading-[4.3rem]">Special payment system <span className="text-[#B0926A]">BunnyShop</span></h3>
                <p className="text-blue-gray-500 dark:text-[#B3B9C4] lg:max-w-[35rem]">Utilizing our platform will simplify your product sales strategy considerably. Don't hesitate, start selling now!</p>
                <div className="flex  lg:justify-start justify-center lg:items-start items-center gap-4 md:flex-row flex-col">
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
            <div className="lg:w-[50%] w-[70%] flex justify-center items-center relative"></div>
        </div>
    </>
  )
}

