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
import { AiOutlineShopping } from "react-icons/ai";


export default function GiftCards() {
  return (
    <>
        <div className="px-1 sm:px-6 flex-col flex gap-2 animate-DownToUp ">

          
          <div className='flex flex-wrap w-full '>
            <GiftCardsItem image="https://i.pinimg.com/originals/10/2e/f7/102ef79c7ee4e07bce8df227ce7b2da5.jpg" title="Amazon gift card" priceRange1="5.00" priceRange2="100.00" value="Value" />
            <GiftCardsItem image="https://cdn.ome.lt/USYftGOGEHyYT2Ir_VQ9Z-g6J7k=/970x360/smart/uploads/conteudo/fotos/xbox_tzv1mNy_DXNIcPv.png" title="Xbox gift card" priceRange1="5.00" priceRange2="100.00" value="Value" />
            <GiftCardsItem image="https://upload.wikimedia.org/wikipedia/commons/2/23/Uber_eats_logo_2017_06_22.jpg" title="Uber eats gift card" priceRange1="5.00" priceRange2="100.00" value="Value" />
            <GiftCardsItem image="https://livecards.net/pl/apple-gift-card-10-eur-be-72851.png" title="Apple gift card" priceRange1="5.00" priceRange2="100.00" value="Value" />
            <GiftCardsItem image="https://media-cdn.tripadvisor.com/media/photo-s/29/4d/2a/63/r.jpg" title="Starbucks gift card" priceRange1="5.00" priceRange2="100.00" value="Value" />
            <GiftCardsItem image="https://corporate.target.com/getmedia/aff90129-8b00-4a07-8abd-4d3839661020/2022-Review-Header_Target.jpg" title="Target gift card" priceRange1="5.00" priceRange2="100.00" value="Value" />
            <GiftCardsItem image="https://mexico-now.com/wp-content/uploads/2023/03/walmart-market.jpg" title="Walmart gift card" priceRange1="5.00" priceRange2="100.00" value="Value" />
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
            <div className="flex hover:bg-gray-100 rounded-xl dark:hover:bg-[#2C333A] cursor-pointer group flex-col h-auto to2:w-[33.33%] to3:w-[25%] to4:w-[20%] prod1880:w-[20%] w-[50%] p-2 sm:p-4">
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
                    <div className="font-semibold text-[rgb(19,23,39)] text-sm sm:text-base dark:text-[#F1F2F4]">{title}</div>
                    <div className="font-bold text-base flex items-center dark:text-[#F1F2F4]">${priceRange1} - ${priceRange2}</div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="text-blue-gray-400 text-sm dark:text-[#8993A5]">{value}</div>
                    <div className="flex sm:flex-row flex-col sm:justify-between gap-2 sm:items-center">
                        <Select>
                            <SelectTrigger className="sm:w-[45%] dark:text-[#F1F2F4] max-w-[185px] dark:hover:bg-[#2C333A] dark:bg-[#282E33] dark:border-[#22262B] dark:outline-none">
                                <SelectValue  placeholder="$100.00" />
                            </SelectTrigger>
                            <SelectContent >
                                <SelectItem className="hover:bg-gray-100 dark:hover:bg-[#ffffff13] hover:cursor-pointer" value="light">$5.00</SelectItem>
                                <SelectItem className="hover:bg-gray-100 dark:hover:bg-[#ffffff13] hover:cursor-pointer" value="dark">$20.00</SelectItem>
                                <SelectItem className="hover:bg-gray-100 dark:hover:bg-[#ffffff13] hover:cursor-pointer" value="system">$100.00</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button placeholder={""} style={{textTransform:"initial"}} variant="filled" className="dark:text-[#F1F2F4] dark:hover:bg-[#2C333A] dark:bg-[#282E33] dark:border-[#22262B] dark:outline-none flex items-center p-[0.62rem] w-full max-w-[125px] justify-center active:shadow-none hover:shadow-none bg-white text-black border shadow-none">
                        <AiOutlineShopping  size="1.2rem"/>
                            Add to cart
                        </Button>
                    </div>
                </div>
                  
                    
                  
                    
              </div>
            </div>
        </>
    )
}