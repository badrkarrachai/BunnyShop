"use client";
import { Carousel } from "@material-tailwind/react";

interface Categorysprops{
    title: string,
    discreption: string
}

export default function Categorys( config: Categorysprops) {
  return (
    
    <div className="sm:px-6 flex gap-3 flex-col animate-DownToUp">
        <div className="sm:text-3xl sm:px-0 px-2 text-[1.3rem] ml-4 font-bold text-[rgb(19,23,39)]">{config.title}</div>
        <p className="ml-4 text-sm sm:px-0 px-2 text-blue-gray-500">{config.discreption}</p>
        <Carousel
        nextArrow={({ loop, handleNext, lastIndex }) => (
            <>
            <div className="bg-gradient-to-r right-0  from-transparent  from-10% via-sky-500 via-30% to-white to-90% h-full  w-[3.9rem] flex items-end !absolute ">
            </div>
            <button
                    onClick={handleNext}
                    disabled={!loop && lastIndex}
                    className="!absolute  top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[48px] h-9 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center bg-[rgba(19,23,39,0.92)]"
                >
                    <img src="chevron-right.svg" className="inline" alt="" />
            </button>
            </>
        )}
        prevArrow={({ loop, handlePrev, firstIndex }) => { 
            return (
            <div className="bg-gradient-to-r from-white from-10% via-sky-500 via-30% to-emerald-500 to-90% h-full  w-[3.9rem] !absolute">
                <button
                onClick={handlePrev}
                disabled={!loop && firstIndex}
                className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[48px] h-9 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center bg-[rgb(19,23,39)]"
                >
                <img src="chevron-left.svg" alt="" />
                </button>
            </div>
            
            );
        }}
        navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
                <span
                key={i}
                className={`hidden  h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-2 bg-white" : "w-2 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
                />
            ))}
            </div>
        )} className="rounded-xl h-full w-full mt-2" placeholder={undefined} transition={{ duration: 1 }}>
                    <div className="flex items-center justify-between px-16 gap-3 flex-wrap">
                        <CategoryItem image="https://i.pinimg.com/564x/d1/77/6a/d1776a6ff3bf2d8cee323cda909c1c6c.jpg" title="Consumer Electronics" />
                        <CategoryItem image="https://i.pinimg.com/736x/22/48/4a/22484a8cdc320786aa5dbc5093bb2fd1.jpg" title="Clothing" />
                        <CategoryItem image="https://i.pinimg.com/originals/32/7e/17/327e17e31b901b495e21eb9f3ec3741f.jpg" title="Hair Extensions & Wigs" />
                        <CategoryItem image="https://i.pinimg.com/564x/74/e1/ea/74e1eab3ec7639e25784b90e4803c6ca.jpg" title="Accessories" />
                        <CategoryItem image="https://i.pinimg.com/564x/73/2b/1d/732b1dbff6956dad61248f8d657a972a.jpg" title="Home Improvement" />
                        <CategoryItem image="https://i.pinimg.com/564x/eb/d8/4a/ebd84aee9bd1feddce359d9803236f4b.jpg" title="Home Appliances" />
                        <CategoryItem image="https://i.pinimg.com/564x/51/49/4d/51494d21104bff97ffb45ea6d9bc4273.jpg" title="Shoes" />
                        
                    </div>
                    <div className="flex items-center justify-between px-16 gap-3 flex-wrap">
                        <CategoryItem image="https://i.pinimg.com/564x/d1/77/6a/d1776a6ff3bf2d8cee323cda909c1c6c.jpg" title="Consumer Electronics" />
                        <CategoryItem image="https://i.pinimg.com/736x/22/48/4a/22484a8cdc320786aa5dbc5093bb2fd1.jpg" title="Clothing" />
                        <CategoryItem image="https://i.pinimg.com/originals/32/7e/17/327e17e31b901b495e21eb9f3ec3741f.jpg" title="Hair Extensions & Wigs" />
                        <CategoryItem image="https://i.pinimg.com/564x/74/e1/ea/74e1eab3ec7639e25784b90e4803c6ca.jpg" title="Accessories" />
                        <CategoryItem image="https://i.pinimg.com/564x/73/2b/1d/732b1dbff6956dad61248f8d657a972a.jpg" title="Home Improvement" />
                        <CategoryItem image="https://i.pinimg.com/564x/eb/d8/4a/ebd84aee9bd1feddce359d9803236f4b.jpg" title="Home Appliances" />
                        <CategoryItem image="https://i.pinimg.com/564x/51/49/4d/51494d21104bff97ffb45ea6d9bc4273.jpg" title="Shoes" />
                        
                    </div>
                    
        </Carousel>
    </div>
  )
}

interface CategoryItemprops{
    image: string,
    title: string
}

function CategoryItem(config: CategoryItemprops){
    return(
        <>
            <div className="flex group flex-col gap-4 justify-center cursor-pointer">
                <div className="xl:h-44 xl:w-44 lg:h-[9.5rem] lg:w-[9.5rem] sm:h-36 sm:w-36  h-[7.3rem] w-[7.3rem] hidden rounded-full absolute bg-[#b0926a70] group-hover:flex justify-center items-center p-2 animate-Fade"><p className="text-center text-white font-medium ">{config.title}</p></div>
                <img
                    src={config.image}
                    alt="image 1"
                    className="xl:h-44 xl:w-44 lg:h-[9.5rem] lg:w-[9.5rem] sm:h-36 sm:w-36  h-[7.3rem] w-[7.3rem] rounded-full object-cover"
                />
                
            </div>
        </>
    )
}