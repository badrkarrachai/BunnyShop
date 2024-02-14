"use client"
import { Button, Carousel } from "@material-tailwind/react";
import { ReactElement } from "react";
import ProductCard from "../Product/ProductCard";



export default function HeroSuperDeals(){
  return(
    <>
      <div className="flex flex-col superDealsCard:flex-row my-24 gap-4 h-auto px-4 sm:px-8 lg:px-20">
        <div className="superDealsCard:w-[70%] w-full">
          <HeroSuperDealsCard image="camera.png" secondClass="hidden" Title='Sony FX4 with 4k Video recording high quality' firstClass="h-[100%] bg-[#F1DEC9]" discreption="This camera is one of the best cameras in the market it's made by Sony you cannot find like it anywhere else" Button={<Button size="md" placeholder={undefined} style={{textTransform:"initial"}} className="cursor-pointer w-[9rem] bg-[rgb(19,23,39)] h-12 text-base">Shop now</Button>} upperTitle="20% sales this week"/></div>
        <div className="superDealsCard:w-[30%] w-auto hidden superDealsCard:flex flex-col gap-4">
          <HeroSuperDealsCard image="airpods.png" Title='Sony FX3 with' secondClass="flex" firstClass="h-full bg-[#EAD7BB]" discreption="This camera is one of the best cameras" />
          <HeroSuperDealsCard image="speaker.png" Title='Sony FX3 with' secondClass="flex" firstClass="h-full bg-[#F7E6C4]" discreption="This camera is one of the best cameras" />
        </div>
      
      </div>
      <div>
      <ProductCard title='Super Deals' discreption='Explore more than 10,000 products and assets with the best price.' 
          image1="https://i.pinimg.com/originals/6e/70/3a/6e703a91d4847a728852e50d2fe39761.jpg"
          image2="https://i.pinimg.com/originals/fa/1f/53/fa1f5353e215cadea662c76b4ec45505.jpg"
          image3="https://i.pinimg.com/originals/20/8c/41/208c417ddbe87185a0c2ae4cc6fded7a.jpg"
          image4="https://i.pinimg.com/originals/3b/fa/b6/3bfab65a642e052e846fed073311cd74.jpg"
          image5="https://i.pinimg.com/originals/1d/7e/17/1d7e1793483f930bbd683fe000d36213.jpg"
          btnVisibile={false}/>
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
      <div className={`${firstClass} flex flex-col sm:flex-row group justify-between items-center w-full rounded-xl px-4 py-8 `}>
        <div className=" flex flex-col justify-center  items-start px-4 gap-5">
            <div className="text-md sm:text-lg font-bold w-full flex justify-center sm:justify-start sm:font-semibold text-center sm:text-left text-red-500 uppercase">{upperTitle}</div>
            <div className="text-xl sm:text-2xl  font-semibold sm:font-bold capitalize text-center sm:text-left">{Title}</div>
            <div className="font-medium flex text-sm  text-center sm:text-left text-blue-gray-500 ">{discreption}</div>
            <div className="w-full flex justify-center sm:justify-start">{Button}</div>
            <div className={` ${secondClass} gap-4 items-center`}>
              <div className="text-lg text-[#E33B1E] font-semibold">249$</div>
              <div className="line-through text-[#838D97] text-sm">350$</div>
            </div>
        </div>
        <div className="w-[100%] max-w-[263px] mt-4 sm:mt-0 sm:max-w-[463px]"><img src={image} alt="img" className="h-full  object-cover"/></div>
      </div>
    </>
  )
}
