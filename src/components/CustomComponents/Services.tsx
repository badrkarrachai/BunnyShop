"use client"
import { Button, Carousel } from "@material-tailwind/react"

interface Servicesprops{
    title: string,
    discreption: string
}
export default function Services(config: Servicesprops) {
  return (
    <div className="sm:px-6 flex gap-3 px-4  flex-col mt-6 animate-DownToUp">
        <div className="px-4 flex gap-3 flex-col">
          <div className="sm:text-3xl sm:px-0 px-2 text-[1.3rem] font-bold text-[rgb(19,23,39)]">{config.title}</div>
          <p className="text-sm sm:px-0 px-2 text-blue-gray-500">{config.discreption}</p>
        </div>
        <div className="flex flex-col gap-8 mt-2">
          <div className="w-full flex gap-8 lg:flex-row flex-col">
              <div className="bg-[#F1E4C3] h-auto group rounded-[2rem] w-full lg:w-[65%]  p-8">
                    <div className="flex justify-between gap-6 sm:flex-row flex-col ">
                        <div className="flex flex-col gap-6 ">
                            <div className="text-2xl font-semibold"> Purchasing with insurance,  <br/>  made easy.</div>
                            <div className="text-base font-normal max-w-[35rem]">This is our promise to you. we accept most product insurance plans both in and out of network</div>
                            <Button size="md" placeholder={undefined} style={{textTransform:"initial"}} className="cursor-pointer w-52 bg-[rgb(19,23,39)] h-12 text-base rounded-full">Shop with insurance</Button>
                        </div>
                        <div className=" w-full flex items-center h-[19rem] justify-center rounded-3xl">
                        <Carousel
                          nextArrow={({ loop, handleNext, lastIndex }) => (
                            <button
                              onClick={handleNext}
                              disabled={!loop && lastIndex}
                              className="!absolute  top-2/4 right-1 sm:right-1 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[48px] h-9 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
                            >
                              <img src="chevron-right.svg" className="sm:hidden group-hover:inline" alt="" />
                            </button>
                          )}
                          prevArrow={({ loop, handlePrev, firstIndex }) => {
                              return (
                                <button
                                  onClick={handlePrev}
                                  disabled={!loop && firstIndex}
                                  className="!absolute top-2/4 left-1 sm:left-1 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-9 max-w-[48px] h-9 max-h-[48px] text-white hover:bg-white/10 active:bg-white/30 grid place-items-center"
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
                            )} className="rounded-3xl h-full w-full cursor-pointer" placeholder={undefined}>
                                      <img
                                          src="https://i.pinimg.com/originals/e3/e0/08/e3e008adb1a2f71df6c2a325cd39b37a.jpg"
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
              <div className="bg-[#E8C872] rounded-[2rem] w-full lg:w-[35%] h-[23.5rem] flex items-center justify-center overflow-hidden">
                <div className="flex flex-col gap-4 sm:gap-6 p-9 justify-center items-center">
                    <div className="text-2xl text-center font-semibold">Shop online, high quality products!</div>
                    <div className="text-base font-normal text-center max-w-[35rem]">Our platform leads globally, delivering top-quality, affordable products with unwavering excellence for unmatched customer value.</div>
                    <Button size="md" placeholder={undefined} style={{textTransform:"initial"}} className="cursor-pointer text-center w-52 bg-[rgb(19,23,39)] h-12 text-base rounded-full">Shop with insurance</Button>
                    <Button style={{textTransform:"initial"}} placeholder={undefined} variant="text" className="flex text-sm items-center gap-2">
            Our quality promise{" "}
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
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
              </div>
          </div>
         
        </div>
    </div>
    
  )
}
