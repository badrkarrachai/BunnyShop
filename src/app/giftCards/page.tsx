"use client"
import GiftCards from "@/components/CustomComponents/GiftCards";
import { Carousel } from "@material-tailwind/react";

export default function page() {
  return (
    <>
      <div className='w-full flex justify-center items-center my-14'>
        <div className="max-w-[100rem] flex flex-col gap-5 ">
          <GiftCardsHero image="" title="" />
          <GiftCards/> 
        </div>
      </div>
    </>
  )
}

interface GiftCardsHeroProps{
  image: string,
  title: string,
}

function GiftCardsHero({ image, title}: GiftCardsHeroProps ){
  return(
    <>
      <div className=" h-[360px] px-3 sm:px-10 animate-DownToUp">
        <Carousel placeholder={""} transition={{ duration: 1 }} 
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 flex -translate-x-2/4 gap-2 z-0">
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
        )}
        nextArrow={({ loop, handleNext, lastIndex }) => (
          <button
            onClick={handleNext}
            disabled={!loop && lastIndex}
            className="!absolute  top-2/4 right-1 sm:right-4 -translate-y-2/4 rounded-full disabled:hidden select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[48px] h-9 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
          >
            <img src="chevron-right.svg" className="inline" alt="" />
          </button>
        )}
        prevArrow={({ loop, handlePrev, firstIndex }) => {
            return (
              <button
                onClick={handlePrev}
                disabled={!loop && firstIndex}
                className="!absolute top-2/4 left-1 sm:left-4 -translate-y-2/4 rounded-full disabled:hidden select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[48px] h-9 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
              >
                <img src="chevron-left.svg" alt="" />
              </button>
            );
          }}
        className="rounded-xl">
          <div className="w-full flex h-full">
            <img
              src="gift1.png"
              alt="image 1"
              className="h-full w-full  object-cover"
            />
            <div className="w-full h-full absolute opacity-20  bg-black"></div>
            <div className="flex justify-center items-center w-full h-full absolute flex-col gap-4 p-4">
              <h2 className="text-white text-4xl uppercase font-bold text-center">Special deal on our gift cards</h2>
              <p className="text-center max-w-[38rem] text-white text-sm">BunnyShop gift cards are currently accessible! Get yours here with an amazing offer, or explore a variety of gift cards for different services.</p>
            </div>
          </div>
          
        </Carousel>
      </div>
    </>
  )
}