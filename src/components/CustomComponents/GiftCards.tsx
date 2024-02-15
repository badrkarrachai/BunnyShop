"use client"
import { FaRegHeart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { Button } from "@material-tailwind/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export default function GiftCards() {
  return (
    <>
        <div className="px-1 sm:px-6 flex-col flex gap-2 animate-DownToUp">
          <div className="flex items-center justify-between">
          <div className="sm:text-3xl text-[1.3rem] ml-4 font-bold text-[rgb(19,23,39)]">Gift Cards</div>
          
          </div>
          <p className="ml-4 text-sm text-blue-gray-500">Here you can buy the latest gift cards in our website</p>
          <div className='flex flex-wrap w-full '>
            <GiftCardsItem image="https://i.pinimg.com/564x/58/1e/76/581e76e832ee71c3cb93c5f4a47e7257.jpg" title="Amazon.com" priceRange1="5.00" priceRange2="100.00" value="Value" />
            
          </div>
        </div>
    </>
  )
}

interface GiftCardsItemProps{
    image: string;
    title: string;
    priceRange1: string;
    priceRange2: string;
    value: string;
}

function GiftCardsItem({image, title, priceRange1, priceRange2, value}:GiftCardsItemProps) {
    return(
        <>
            <div className="flex hover:bg-gray-100 rounded-xl  cursor-pointer group flex-col h-auto to2:w-[33.33%] to3:w-[25%] to4:w-[20%] prod1880:w-[20%] w-[50%] p-2 sm:p-4">
              <div className="flex justify-end">
             
              </div>
              <div className="sm:h-[14rem] h-[11rem] md:h-[270px]">
                <img
                                src={image}
                                alt="image 3"
                                className="rounded-xl h-full w-full object-cover"
                            />
              </div>
              <div className="flex flex-col p-2 mt-2 gap-5">
                  <div className="flex flex-col gap-2">
                      <div className="font-semibold text-[rgb(19,23,39)] text-sm sm:text-base">{title}</div>
                      <div className="font-bold text-base flex items-center">${priceRange1} - ${priceRange2}</div>
                  </div>
                  <div className="text-blue-gray-400 text-sm sm:text-base">{value}</div>
                  <Select>
                      <SelectTrigger className="w-[45%]">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                    
                  
                    
              </div>
            </div>
        </>
    )
}