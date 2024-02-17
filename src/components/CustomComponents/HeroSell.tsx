"use client"
import { Button } from "@material-tailwind/react";
export default function HeroSell() {
  return (
    <>
        <section id="Sell_Hero" className=" flex justify-center items-center w-full">
            <div className="flex lg:flex-row flex-col  max-w-[100rem] w-full my-14 px-2 sm:px-10">
            <div className=" w-full lg:w-[50%]  lg:text-start text-center space-y-8">
                <h3 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-6xl dark:text-[#ecf0f5] text-[rgb(19,23,39)] w-full lg:max-w-[35rem] md:leading-[4.3rem]">The best platform for selling your <span className="text-[#B0926A]">products</span></h3>
                <p className="text-blue-gray-500 dark:text-[#B3B9C4]  lg:max-w-[35rem]">Utilizing our platform will simplify your product sales strategy considerably. Don't hesitate, start selling now!</p>
                <div className=" dark:hover:bg-[#2C333A] group flex   lg:max-w-[35rem] pl-6  items-center space-x-2 rounded-full bg-white p-2 dark:border-[#22262B] dark:group-hover:bg-[#2C333A] dark:bg-[#1D2125] justify-between">
                <input
                    className=" h-full w-full outline-none dark:text-white dark:group-hover:bg-[#2C333A] dark:bg-[#1D2125] text-sm text-gray-700 pr-2 bg-slate-50 max-w-[25rem]"
                    type="text"
                    id="Email"
                    placeholder="Enter your product name" />
                <Button placeholder={""} type="submit" className="min-w-[8rem] dark:text-[#ecf0f5]  bg-[#B0926A] rounded-full text-base py-4" style={{textTransform:"initial"}}>Sell Item</Button>
                </div>
                
            </div>
            <div className="w-[50%]">
                <div className="bg-black w-full h-full">cc</div>

            </div>
            </div>
      </section>

    </>
  )
}
