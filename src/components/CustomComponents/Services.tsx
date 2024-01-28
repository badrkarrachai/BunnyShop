"use client"
import { Button } from "@material-tailwind/react"

interface Servicesprops{
    title: string,
    discreption: string
}
export default function Services(config: Servicesprops) {
  return (
    <div className="sm:px-6 flex gap-3 px-1  flex-col  animate-DownToUp">
        <div className="sm:text-3xl sm:px-0 px-2 text-[1.3rem]  font-bold text-[rgb(19,23,39)]">{config.title}</div>
        <p className="text-sm sm:px-0 px-2 text-blue-gray-500">{config.discreption}</p>
        <div className="flex flex-col gap-8 mt-2">
          <div className="w-full flex gap-8">
              <div className="bg-[#F1E4C3] rounded-[2rem] w-[65%] h-[23.5rem] overflow-hidden">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-6 p-8">
                            <div className="text-2xl font-semibold"> Purchasing with insurance,  <br/>  made easy.</div>
                            <div className="text-base font-normal max-w-[35rem]">This is our promise to you. we accept most product insurance plans both in and out of network</div>
                            <Button size="md" placeholder={undefined} style={{textTransform:"initial"}} className="w-52 bg-[rgb(19,23,39)] h-12 text-base rounded-full">Shop with insurance</Button>
                        </div>
                        <div className="mt-2 w-full flex items-end justify-end "><img src="/makeup.png" alt="makeup" className="w-[25rem] h-[25rem] ml-7"/></div>

                    </div>
              </div>
              <div className="bg-[#BBAB8C] rounded-[2rem] w-[35%] h-[23.5rem] overflow-hidden">
                <div className="flex flex-col gap-6 p-8">
                    <div className="text-2xl font-semibold">Shop online, <br /> high quality products!</div>
                    <div className="text-base font-normal max-w-[35rem]"> Our platform is one of the worldwide  <br />lead In providing high quality  <br />and affordable products!</div>
                    <div className=" w-full flex items-center justify-center "><img src="/glasses.png" alt="glasses" className="w-[10rem] h-[10rem]"/></div>

                </div>
              </div>
          </div>
         
        </div>
    </div>
    
  )
}
