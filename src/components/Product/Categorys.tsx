"use client";
import { Carousel } from "@material-tailwind/react";

interface Categorysprops{
    title: string,
    discreption: string
}

export default function Categorys( config: Categorysprops) {
  return (
    
    <div className="sm:px-6 flex gap-3 flex-col animate-DownToUp">
        <div className="sm:text-3xl sm:px-0 px-2 text-[1.3rem] ml-4 font-bold text-[rgb(19,23,39)] dark:text-white">{config.title}</div>
        <p className="ml-4 text-sm sm:px-0 px-2 text-blue-gray-500 dark:text-[#B3B9C4]">{config.discreption}</p>
        <Carousel
        nextArrow={({ loop, handleNext, lastIndex }) => (
            <>
            <div className="bg-gradient-to-r right-0 dark:to-[#161A1D] from-transparent  from-10% via-sky-500 via-30% to-white to-90% h-full  w-[3.9rem] flex items-end !absolute ">
            </div>
            <button
                    onClick={handleNext}
                    disabled={!loop && lastIndex}
                    className="!absolute  top-2/4 right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[48px] h-9 max-h-[48px] text-white hover:bg-black/60 active:bg-white/30 grid place-items-center dark:bg-[#4e5052] bg-[rgba(19,23,39,0.92)]"
                >
                    <img src="chevron-right.svg" className="inline" alt="" />
            </button>
            </>
        )}
        prevArrow={({ loop, handlePrev, firstIndex }) => { 
            return (
            <div className="bg-gradient-to-r from-white dark:from-[#161A1D] from-10% via-sky-500 via-30% to-emerald-500 to-90% h-full  w-[3.9rem] !absolute">
                <button
                onClick={handlePrev}
                disabled={!loop && firstIndex}
                className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[48px] h-9 max-h-[48px] text-white hover:bg-black/60 active:bg-white/30 grid place-items-center dark:bg-[#4e5052] bg-[rgb(19,23,39)]"
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
                    <div className="flex gap-4 flex-col">
                        <div className="grid items-center justify-between px-16 gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 catTo6:grid-cols-7">
                            <CategoryItem image="https://i.pinimg.com/564x/d1/77/6a/d1776a6ff3bf2d8cee323cda909c1c6c.jpg" title="Consumer Electronics" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/e2/8e/5b/e28e5ba1e17c4fef74d4d6bfad8093b0.jpg" title="Men's Clothing" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/originals/32/7e/17/327e17e31b901b495e21eb9f3ec3741f.jpg" title="Hair Extensions & Wigs" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/73/7a/c8/737ac85f00c312ad6a5144118ae86e77.jpg" title="Accessories" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/73/2b/1d/732b1dbff6956dad61248f8d657a972a.jpg" title="Home Improvement" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/eb/d8/4a/ebd84aee9bd1feddce359d9803236f4b.jpg" title="Home Appliances" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/51/49/4d/51494d21104bff97ffb45ea6d9bc4273.jpg" title="Shoes" cls={''}/>
                            
                            <CategoryItem image="https://i.pinimg.com/564x/72/f0/3b/72f03bb56e0aa16c8caf6bfdc7633950.jpg" title="Computer Office & Education" cls={'catTo6:hidden'} />
                            <CategoryItem image="https://i.pinimg.com/564x/44/9d/7b/449d7b0fd78c482fe301430ed60cf6ea.jpg" title="Jewelry & Watches" cls={'catTo6:hidden'}/>
                            <CategoryItem image="https://i.pinimg.com/564x/f3/f4/b3/f3f4b3397d56aba28ff2fb79f2027ed3.jpg" title="Sports & Entertainment" cls={'catTo6:hidden'}/>
                            <CategoryItem image="https://i.pinimg.com/564x/fa/bf/75/fabf75001155b9b348b36febb0d9b3f2.jpg" title="Toys & Games" cls={'catTo6:hidden'}/>
                            <CategoryItem image="https://i.pinimg.com/564x/d6/8a/86/d68a86464f1ef5c10942c02f8f673317.jpg" title="Babies & Kids" cls={'catTo6:hidden'}/>
                            <CategoryItem image="https://i.pinimg.com/originals/09/b6/74/09b67473ec2961aea27d3dd08b07ee1c.jpg" title="Security & Protection" cls={'catTo6:hidden'}/>
                        </div>
                        <div className=" items-center justify-between px-40 gap-3 flex-wrap catTo6:flex hidden">
                            <CategoryItem image="https://i.pinimg.com/564x/72/f0/3b/72f03bb56e0aa16c8caf6bfdc7633950.jpg" title="Computer Office & Education" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/44/9d/7b/449d7b0fd78c482fe301430ed60cf6ea.jpg" title="Jewelry & Watches" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/f3/f4/b3/f3f4b3397d56aba28ff2fb79f2027ed3.jpg" title="Sports & Entertainment" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/fa/bf/75/fabf75001155b9b348b36febb0d9b3f2.jpg" title="Toys & Games" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/d6/8a/86/d68a86464f1ef5c10942c02f8f673317.jpg" title="Babies & Kids" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/originals/09/b6/74/09b67473ec2961aea27d3dd08b07ee1c.jpg" title="Security & Protection" cls={''}/>
                            
                            
                        </div>
                    </div>
                    <div className="flex gap-4 flex-col">
                        <div className="grid items-center justify-between px-16 gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 catTo6:grid-cols-7">
                            <CategoryItem image="https://i.pinimg.com/564x/78/0f/60/780f6026f6ec1c0a3b9c37af67180896.jpg" title="Special Occasion Costume" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/db/51/95/db519529496b547c93d1ad8b230559b0.jpg" title="Furniture" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/a0/eb/e2/a0ebe29149fe434cc8b4964db05cf43e.jpg" title="Home & Garden" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/aa/5c/b6/aa5cb637791333b236b9c85386e76ec2.jpg" title="Luggages & Bags" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/f2/12/e2/f212e21a93ab0dac6df329a761f1c465.jpg" title="Beauty & Health" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/originals/e5/09/b0/e509b08a1ec5e774f1931dc87fcf0803.jpg" title="Pet Supplies" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/originals/92/4d/8c/924d8cd5183c73789dd59ba77ab911cd.jpg" title="Automotive & Motorcycle" cls={''}/>
                            
                            <CategoryItem image="https://i.pinimg.com/564x/44/c2/18/44c218ba76c27bbd6bf9b9d6227168dd.jpg" title="Tools & Industrial" cls={'catTo6:hidden'}/>
                            <CategoryItem image="https://i.pinimg.com/736x/22/48/4a/22484a8cdc320786aa5dbc5093bb2fd1.jpg" title="Women's Clothing" cls={'catTo6:hidden'}/>
                            <CategoryItem image="https://i.pinimg.com/564x/a5/9e/01/a59e012f0feb452ce6bc4d7037d55f2d.jpg" title="Phones & Telecommunications" cls={'catTo6:hidden'}/>
                            <CategoryItem image="https://i.pinimg.com/originals/12/c6/f9/12c6f93254a6500a57610308b17bbb5a.jpg" title="Electric Transportation" cls={'catTo6:hidden'}/>
                            <CategoryItem image="https://i.pinimg.com/564x/4e/a6/6e/4ea66e52239d6bc956b0e08ec2655ad5.jpg" title="Woman's Shoes" cls={'catTo6:hidden'}/>
                            <CategoryItem image="https://i.pinimg.com/564x/54/68/a3/5468a33bc43e258995f15ad01e5ad7cc.jpg" title="Digital Gaming" cls={'catTo6:hidden'}/>
                        </div>
                        <div className=" items-center justify-between px-40 gap-3 flex-wrap catTo6:flex hidden">
                            <CategoryItem image="https://i.pinimg.com/564x/44/c2/18/44c218ba76c27bbd6bf9b9d6227168dd.jpg" title="Tools & Industrial" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/736x/22/48/4a/22484a8cdc320786aa5dbc5093bb2fd1.jpg" title="Women's Clothing" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/a5/9e/01/a59e012f0feb452ce6bc4d7037d55f2d.jpg" title="Phones & Telecommunications" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/originals/12/c6/f9/12c6f93254a6500a57610308b17bbb5a.jpg" title="Electric Transportation" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/4e/a6/6e/4ea66e52239d6bc956b0e08ec2655ad5.jpg" title="Woman's Shoes" cls={''}/>
                            <CategoryItem image="https://i.pinimg.com/564x/54/68/a3/5468a33bc43e258995f15ad01e5ad7cc.jpg" title="Digital Gaming" cls={''}/>
                            
                            
                        </div>
                    </div>
        </Carousel>
    </div>
  )
}

interface CategoryItemprops{
    image: string,
    title: string,
    cls:string
}

function CategoryItem(config: CategoryItemprops){
    return(
        <>
            <div className={`${config.cls} flex group flex-col gap-4 justify-center cursor-pointer`}>
                <div className="catTo6:h-44 catTo6:w-44 lg:h-[9.5rem] lg:w-[9.5rem] sm:h-30 sm:w-30  h-[7.3rem] w-[7.3rem] hidden rounded-full absolute bg-[#b0926a70] group-hover:flex justify-center items-center p-2 animate-Fade"><p className="text-center text-white font-medium ">{config.title}</p></div>
                <img
                    src={config.image}
                    alt="image 1"
                    className="catTo6:h-44 catTo6:w-44 lg:h-[9.5rem] lg:w-[9.5rem] sm:h-30 sm:w-30  h-[7.3rem] w-[7.3rem] rounded-full object-cover"
                />
                
            </div>
        </>
    )
}