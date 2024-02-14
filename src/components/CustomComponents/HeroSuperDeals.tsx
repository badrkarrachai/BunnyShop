"use client"
import { Button, Carousel } from "@material-tailwind/react";
import { ReactElement } from "react";



export default function HeroSuperDeals(){
  return(
    <>
      <div className="flex my-24 gap-4 h-auto px-20">
        <div className="w-[70%]"><HeroSuperDealsCard image="camera.png" secondClass="hidden" Title='Sony FX4 with 4k Video recording high quality' firstClass="h-[100%] bg-[#F1DEC9]" discreption="This camera is one of the best cameras in the market it's made by Sony you cannot find like it anywhere else" Button={<Button size="md" placeholder={undefined} style={{textTransform:"initial"}} className="cursor-pointer w-[9rem] bg-[rgb(19,23,39)] h-12 text-base">Shop now</Button>} upperTitle="20% sales this week"/></div>
        <div className="w-[30%] flex flex-col gap-4">
          <HeroSuperDealsCard image="airpods.png" Title='Sony FX3 with' secondClass="flex" firstClass="h-full bg-[#EAD7BB]" discreption="This camera is one of the best cameras" />
          <HeroSuperDealsCard image="speaker.png" Title='Sony FX3 with' secondClass="flex" firstClass="h-full bg-[#F7E6C4]" discreption="This camera is one of the best cameras" />
        </div>
      
      </div>
    </>
  )
}

interface HeroSuperDealsCardProps{
  Title: string, 
  discreption: string, 
  image: string,
  Button?: ReactElement, 
  upperTitle?: string,
  firstClass?: string,
  secondClass?: string,
}

function HeroSuperDealsCard({Title, image, discreption, Button, upperTitle, firstClass, secondClass}:HeroSuperDealsCardProps) {
  return (
    <>
      <div className={`${firstClass} flex flex-row group justify-center items-center w-full rounded-xl px-4 py-4 `}>
        <div className=" flex flex-col justify-center items-start px-4 gap-5">
            <div className="text-md sm:text-lg font-bold sm:font-semibold text-red-500 uppercase">{upperTitle}</div>
            <div className="text-xl sm:text-2xl  font-semibold sm:font-bold text-center capitalize lg:text-left">{Title}</div>
            <div className="font-medium flex text-center text-sm lg:text-left text-blue-gray-500 ">{discreption}</div>
            {Button}
            <div className={` ${secondClass} gap-4 items-center`}>
              <div className="text-lg text-[#E33B1E] font-semibold">249$</div>
              <div className="line-through text-[#838D97] text-sm">350$</div>
            </div>
        </div>
        <div className="w-[100%] "><img src={image} alt="img" className="h-full object-cover"/></div>
      </div>
    </>
  )
}
