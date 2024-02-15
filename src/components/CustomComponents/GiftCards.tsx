import { Button } from "@material-tailwind/react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";


export default function GiftCards() {
  return (
    <>
        <div className="px-1 sm:px-6 flex-col flex gap-2 animate-DownToUp">
          <div className="flex items-center justify-between">
          <div className="sm:text-3xl text-[1.3rem] ml-4 font-bold text-[rgb(19,23,39)]">Gift Cards</div>
          
          </div>
          <p className="ml-4 text-sm text-blue-gray-500">Here you can buy the latest gift cards in our website</p>
          <div className='flex flex-wrap w-full '>
            <GiftCardsItem image="https://i.pinimg.com/564x/58/1e/76/581e76e832ee71c3cb93c5f4a47e7257.jpg" title="Gloss for lips from bouzakarn" priceRange1="5.00" priceRange2="100.00" value="100" />
            
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
              <div className="">
              <div className="ml-[-3.0rem] rounded-full hover:bg-[#b1b1b160] p-2 mt-[0.9rem] z-30 absolute "><FaRegHeart size={"1.2rem"} color={"#ffff"} /></div>
              </div>
              </div>
              <div className="sm:h-[14rem] h-[11rem] md:h-[270px]">
                <img
                                src={image}
                                alt="image 3"
                                className="rounded-xl h-full w-full object-cover"
                            />
              </div>
              <div className="flex flex-col p-2 mt-2">
                  <div className="flex  w-full justify-between gap-1 ">
                      <div className="font-medium text-[rgb(19,23,39)] text-sm sm:text-base">{title}</div>
                      <div className="flex gap-[2px] text-sm sm:text-base text-[rgb(19,23,39)]">
                          <div className="sm:mt-[2px] "><IoMdStar size="18px"/></div>
                          4.48
                      </div>

                  </div>
                  <div className="font-semibold text-base sm:text-lg flex items-center w-full my-1">${priceRange1}</div>
                  <div className="text-blue-gray-400 flex text-sm sm:text-base">Was: $ <div className="line-through">{priceRange2}</div></div>
                  <div className="text-blue-gray-400 text-sm sm:text-base">{value}</div>
              </div>
      </div>
        </>
    )
}