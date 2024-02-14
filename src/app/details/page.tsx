"use client"
import { IoShieldOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { Button, Carousel } from '@material-tailwind/react'
export default function page() {
  return (
    <div className="flex xl:flex-row flex-col  w-full xl:h-[30rem]  gap-8 px-5 sm:px-10 animate-DownToUp">

       <div className="flex flex-col">
          <div className='text-md sm:text-xl font-bold sm:font-semibold flex gap-4 text-blue-gray-500'><div className="">Home</div> / <div>Products</div></div>
          <div className="flex lg:flex-row flex-col group justify-center items-center w-full  p-4 sm:p-8  gap-6">
              <div className="lg:w-[50%] w-full flex flex-col justify-center lg:items-start items-center  px-4 gap-5 ">
                  <div className="text-xl sm:text-3xl  font-semibold sm:font-bold text-center lg:text-left">LemonMilk - Premium Vector Line Icon Set</div>
                  <div className=' flex gap-4'><div className="text-md sm:text-xl font-bold sm:font-semibold">$94.99</div> | <div className='text-blue-gray-500'>Icons</div></div>
                  <div className="font-medium flex text-center lg:text-left text-blue-gray-500">This is our promise to you. we accept most product insurance plans both in and out of network is our promise to you. we accept most product insurance plans both in and out of network</div>
                  <div className=' flex gap-2'><div className="flex items-center"><FaCheck color="#0D9276"/></div><div className='text-blue-gray-500'>Ugeeble for instant delivery</div></div>
                  <Button size="md" placeholder={undefined} style={{textTransform:"initial"}} className="cursor-pointer w-full mt-10 bg-[rgb(19,23,39)] h-12 text-base">Add to cart</Button>
                  <div className="flex justify-center w-full gap-2"> <div className="flex items-center"><IoShieldOutline/></div> <div className="text-md  font-bold sm:font-semibold flex gap-4 text-blue-gray-500">30 days return gurantee</div></div>
              </div>

                <div className=" max-h-[350px] w-[50%] h-full  lg:px-16">
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
                    )} className="rounded-xl h-full w-full" placeholder={undefined}>
                              <img
                                  src="https://i.pinimg.com/originals/6e/70/3a/6e703a91d4847a728852e50d2fe39761.jpg"
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
                
      

          </div>
       </div>
    </div>
  )
}
