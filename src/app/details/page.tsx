"use client"
import { IoShieldOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { Button, Carousel } from '@material-tailwind/react'
import { ReactElement } from "react";
import ProductCard from "@/components/Product/ProductCard";


export default function page() {
  return (
    <>
      <div className='w-full flex-col flex justify-center items-center mb-16'>
        <div className='max-w-[100rem] '>
            <DetailsCard title="LemonMilk - premium vector line icon set" price="$34.99" category="icons" description="This is our promise to you. Which is going to be the best product you can buy ever if you come and buy in the store we will be glad and so ha we accept most product insurance plans both in and out of network is our promise to you. we accept most product insurance plans both in and out of network" icon={<FaCheck color="#0D9276"/>} note="Ugeeble for instant delivery" gurantees="30 days return gurantee" productImages={["https://i.pinimg.com/originals/6e/70/3a/6e703a91d4847a728852e50d2fe39761.jpg","https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80","https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"]}/>
            <ProductCard btnVisibile={true} title='Similar products' discreption='Explore more products that have the same category as this product.' 
          image1="https://i.pinimg.com/originals/6e/70/3a/6e703a91d4847a728852e50d2fe39761.jpg"
          image2="https://i.pinimg.com/originals/fa/1f/53/fa1f5353e215cadea662c76b4ec45505.jpg"
          image3="https://i.pinimg.com/originals/20/8c/41/208c417ddbe87185a0c2ae4cc6fded7a.jpg"
          image4="https://i.pinimg.com/originals/3b/fa/b6/3bfab65a642e052e846fed073311cd74.jpg"
          image5="https://i.pinimg.com/originals/1d/7e/17/1d7e1793483f930bbd683fe000d36213.jpg"/>
        </div>
      </div>

      
    </>
  )
}
interface detailsCardProps{
  title: string,
  price:string,
  category: string ,
  description:string ,
  icon?: ReactElement ,
  note:string ,
  gurantees:string ,
  productImages:Array<string>,
} 
function DetailsCard({title,price,category,description,icon,note,gurantees,productImages}:detailsCardProps){ 
  return(
    <>
      <div className=" px-6 sm:px-20 lg:px-32 flex flex-col-reverse lg:flex-row group h-full items-center w-full mb-28 lg:mb-0 gap-14">
        <div className="lg:w-[50%] w-full flex flex-col  lg:items-start gap-5 ">
            <div className="text-blue-gray-500 font-poppins lg:inline-block hidden">Home / Products</div>
            <div className="text-xl sm:text-3xl  font-semibold sm:font-bold text-center lg:text-left capitalize">{title}</div>
            <div className=' flex gap-4 w-full lg:justify-start justify-center items-center'>
              <div className="text-md sm:text-xl font-bold sm:font-semibold">{price}</div> | <div className='text-blue-gray-500'>{category}</div></div>
            <div className=" flex text-center lg:text-left text-blue-gray-500">{description}</div>
            <div className='w-full justify-center lg:justify-start flex gap-2'><div className="flex items-center">{icon}</div><div className='text-blue-gray-500'>{note}</div></div>
            <Button size="md" placeholder={undefined} style={{textTransform:"initial"}} className="cursor-pointer w-full mt-8 lg:mt-14 bg-[rgb(19,23,39)] h-12 text-base">Add to cart</Button>
            <div className="flex justify-center w-full gap-2"> <div className="flex items-center"><IoShieldOutline size="1.2rem" color="#6F7D8B" /></div> <div className="text-md  font-bold sm:font-semibold flex gap-4 text-blue-gray-500">{gurantees}</div></div>
        </div>
        <div className=" lg:py-44 mt-14 sm:mt-28 lg:mt-0 w-full lg:w-[50%] h-auto ">
        <div className="text-[#7A7A7B] font-poppins mb-5 inline-block lg:hidden ">Home / Products</div>
          <Carousel
          nextArrow={({ loop, handleNext, lastIndex }) => (
            <button
              onClick={handleNext}
              disabled={!loop && lastIndex}
              className="!absolute  top-2/4 right-1 sm:right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[48px] h-9 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
            >
              <img src="chevron-right.svg" className="sm:hidden group-hover:inline" alt="" />
            </button>
          )}
            prevArrow={({ loop, handlePrev, firstIndex }) => {
              return (
                <button
                  onClick={handlePrev}
                  disabled={!loop && firstIndex}
                  className="!absolute top-2/4 left-1 sm:left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[48px] h-9 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
                >
                  <img src="chevron-left.svg" alt="" />
                </button>
              );
            }}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-2 bg-white" : "w-2 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )} className="rounded-xl h-[calc(100vh-300px)] w-full" placeholder={undefined}>
                {productImages.map((image,i) => (
                  <img
                    key={i}
                    src={image}
                    alt="image 1"
                    className="h-full w-full object-cover"
                  />
                ))}
          </Carousel>
        </div>
        
      </div>
    </>
  )
}