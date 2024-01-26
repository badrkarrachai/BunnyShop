"use client";
import { Carousel } from "@material-tailwind/react";
import { IoMdStar } from "react-icons/io";
export default function ProductCard() {
  return (
    <>
        <div className="flex flex-col h-auto sm:w-[50%] md:w-[33.33%] lg:w-[25%] xl:w-[16.66%] w-[100%] p-4">
             <div className="">
             <Carousel className="rounded-xl h-full w-full" placeholder={undefined}>
                        <img
                            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            alt="image 2"
                            className="h-full w-full  object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
            </Carousel>
             </div>
             <div className="flex flex-col p-2 ">
                <div className="flex  w-full justify-between items-center">
                    <div className="font-semibold text-lg">Dyson V11 Extra Cordless</div>
                    <div className="flex gap-[2px]">
                        <div className="mt-[2px]"><IoMdStar size="18px"/></div>
                        4.48
                    </div>

                </div>
                <div className="">
                <div className="font-semibold text-lg flex items-center w-full">$1,199.00</div>
                <div className="text-blue-gray-400 flex">Was: $ <div className="line-through">2,199.00</div></div>
                <div className="text-blue-gray-400">Free shipping</div>
                </div>

             </div>
        </div>

    </>
  )
}
