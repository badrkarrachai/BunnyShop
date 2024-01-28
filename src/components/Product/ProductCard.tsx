"use client";
import { Button, Carousel } from "@material-tailwind/react";
import { IoMdStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

interface ProductCardPops{
  title: string,
  discreption: string,
  image1: string,
  image2: string,
  image3: string,
  image4: string,
  image5: string
}
export default function ProductCard(config: ProductCardPops) {
  return (
    <>
        <div className="px-1 sm:px-6 flex-col flex gap-2 animate-DownToUp">
          <div className="flex items-center justify-between">
          <div className="sm:text-3xl text-[1.3rem] ml-4 font-bold text-[rgb(19,23,39)]">{config.title}</div>
          <Button style={{textTransform:"initial",color:"#B0926A"}} placeholder={undefined} variant="text" className="flex text-sm items-center gap-2">
            Shop the collection
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            color="#B0926A"
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
          <p className="ml-4 text-sm text-blue-gray-500">{config.discreption}</p>
          <div className='flex flex-wrap w-full '>
            <SmallCard image={config.image1} title="Gloss for lips from bouzakarn" price="10.00" oldPrice="25.00" category="Makeup - Beauty" />
            <SmallCard image={config.image2} title="Nike casual shoose for men" price="30.00" oldPrice="45.00" category="Clothes"/>
            <SmallCard image={config.image3} title="Rolex watch for men" price="20.00" oldPrice="30.00" category="Accessories"/>
            <SmallCard image={config.image4} title="Iphone 15 pro gray edition" price="999.00" oldPrice="1250.00" category="Electronics"/>
            <SmallCard image={config.image5} title="Samsung clening machine 990x pro" price="799.00" oldPrice="900.00" category="Electronics"/>

          </div>
        </div>

    </>
  )
}

interface smallCardsProps{
  image: string,
  title: string,
  price: string,
  oldPrice: string,
  category: string,
}

function SmallCard(config:smallCardsProps){


  return(
    <>
      <div className="flex hover:bg-gray-100 rounded-xl  cursor-pointer group flex-col h-auto sm:w-[50%] md:w-[33.33%] prod1280:w-[25%] prod1880:w-[20%] w-[50%] p-2 sm:p-4">
              <div className="flex justify-end">
              <div className="">
              <div className="ml-[-3.0rem] rounded-full hover:bg-[#b1b1b160] p-2 mt-[0.9rem] z-30 absolute "><FaRegHeart size={"1.2rem"} color={"#ffff"} /></div>
              </div>
              </div>
              <div className="sm:h-[270px] h-[11rem]">
            
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
                              src={config.image}
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
              <div className="flex flex-col p-2 mt-2">
                  <div className="flex  w-full justify-between gap-1 ">
                      <div className="font-medium text-[rgb(19,23,39)] text-sm sm:text-base">{config.title}</div>
                      <div className="flex gap-[2px] text-sm sm:text-base text-[rgb(19,23,39)]">
                          <div className="sm:mt-[2px] "><IoMdStar size="18px"/></div>
                          4.48
                      </div>

                  </div>
                  <div className="font-semibold text-base sm:text-lg flex items-center w-full my-1">${config.price}</div>
                  <div className="text-blue-gray-400 flex text-sm sm:text-base">Was: $ <div className="line-through">{config.oldPrice}</div></div>
                  <div className="text-blue-gray-400 text-sm sm:text-base">{config.category}</div>
              </div>
      </div>
    </>
    )

}