"use client"
import { Button, Carousel } from "@material-tailwind/react";

export default function HeroSuperDeals() {
  return (
    <>
    
        <div className="flex xl:flex-row flex-col  w-full xl:h-[30rem] h-full gap-8 px-5 sm:px-10  my-20   animate-DownToUp">
            <div className="flex lg:flex-row flex-col group justify-center items-center w-full xl:w-[75%] p-4 sm:p-8 bg-[#F1E4C3] gap-6">
              <div className="lg:w-[50%] w-full flex flex-col justify-center lg:items-start items-center  px-4 gap-5">
                  <div className="text-md sm:text-xl font-bold sm:font-semibold text-red-500">SUMMER SALE UPTO 20%</div>
                  <div className="text-xl sm:text-3xl  font-semibold sm:font-bold text-center lg:text-left">Polaroid i-type Instant Camera</div>
                  <div className="font-medium flex text-center lg:text-left text-blue-gray-500">This is our promise to you. we accept most product insurance plans both in and out of network</div>
                  <Button size="md" placeholder={undefined} style={{textTransform:"initial"}} className="cursor-pointer w-[9rem] bg-[rgb(19,23,39)] h-12 text-base">Shop now</Button>
              </div>
                <div className="w-[75%]"><img src="camera.png" alt="img" className="h-full object-cover"/></div>
            </div>
            <div className="flex h-full flex-col  lg:flex-row xl:flex-col gap-8">
                <div className="bg-[#dbda7fde]  w-full  h-[50%] flex  p-4 sm:p-8 overflow-hidden ">
                  <div className="flex w-[50%] flex-col gap-4 sm:gap-6">
                    <div className="flex flex-col gap-6 h-full justify-center ">
                        <span className="text-lg sm:text-xl font-bold sm:font-extrabold">High-Quality Speaker</span>  
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-500">Weekend Descount</span>    
                            <div className="flex">
                                <span className="text-xl sm:text-2xl text-red-500 font-extrabold">$129</span>
                                <span className="text-gray-500 flex items-center ml-3">$200</span>
                            </div>
                        </div>                  
                    </div>
                  </div>
                  <div className="w-[50%]">
                      <img src="speaker.png" alt="img" className="h-full max-h-[250.94px] w-full object-cover"/>
                  </div>
                </div>
                <div className="bg-[#dbda7fde]  w-full  h-[50%] flex  p-4 sm:p-8 overflow-hidden ">
                  <div className="flex w-[50%] flex-col gap-4 sm:gap-6">
                    <div className="flex flex-col gap-6 h-full justify-center ">
                        <span className="text-lg sm:text-xl font-bold sm:font-extrabold">High-Quality Speaker</span>  
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-500">Weekend Descount</span>    
                            <div className="flex">
                                <span className="text-xl sm:text-2xl text-red-500 font-extrabold">$129</span>
                                <span className="text-gray-500 flex items-center ml-3">$200</span>
                            </div>
                        </div>                  
                    </div>
                  </div>
                  <div className="w-[50%]">
                      <img src="airpods.png" alt="img" className="max-h-[250.94px] h-full w-full object-cover"/>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}
