import HeroSell from "@/components/CustomComponents/HeroSell";
import { FiPieChart } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import { AiOutlinePercentage } from "react-icons/ai";
import { MdPayment } from "react-icons/md";



export default function page() {
  return (
    <>
      <div className="space-y-28">
        <HeroSell/>
        <div className="flex justify-center items-center px-4 animate-DownToUp">
          <div className="max-w-[100rem] space-y-28">
            <div className="space-y-12">
              <div className="text-center flex flex-col gap-5 w-full items-center justify-center">
                <h4 className="text-[#B0926A] font-semibold text-lg">SERVICES</h4>
                <h2 className="dark:text-[#ecf0f5] text-[rgb(19,23,39)] text-3xl sm:text-5xl max-w-[39rem] font-semibold">We provide various kind of services for you</h2>
              </div>
              <div className="flex flex-wrap px-4 justify-center items-center gap-7">
                <div className="bg-[#ECEDF3] w-[20rem] h-[13rem] sm:w-[25rem] sm:h-[14rem] rounded-3xl flex content-between flex-col justify-between p-8">
                  <img src="middleServices1.png" className="w-[20rem] h-[13rem] sm:w-auto sm:h-auto mt-[-2rem] ml-[-2rem] absolute" alt="" />
                  <LuCalendarDays   size="2.5rem" />
                  <p className="max-w-[3rem] text-2xl font-semibold">Financial planning</p>
                </div>
                <div className="bg-[#B0926A] dark:text-[#ecf0f5] w-[20rem] h-[13rem] sm:w-[25rem] sm:h-[14rem] rounded-3xl flex content-between flex-col justify-between p-8">
                  <img src="middleServices2.png" className="w-[20rem] h-[13rem] sm:w-auto sm:h-auto mt-[-2rem] ml-[-2rem] absolute" alt="" />
                  <FiPieChart size="2.5rem" />
                  <p className="max-w-[3rem] text-2xl font-semibold">Product Analytics</p>
                </div>
                <div className="bg-[#ECEDF3] w-[20rem] h-[13rem] sm:w-[25rem] sm:h-[14rem] rounded-3xl flex content-between flex-col justify-between p-8">
                  <img src="middleServices1.png" className="w-[20rem] h-[13rem] sm:w-auto sm:h-auto mt-[-2rem] ml-[-2rem] absolute" alt="" />
                  <MdPerson size="2.5rem" />
                  <p className="max-w-[3rem] text-2xl font-semibold">Interested customers</p>
                </div>
              </div>
            </div>
            <div className="text-center flex flex-col gap-5 w-full items-center py-24 justify-center">
              <h4 className="text-[#B0926A] font-semibold text-lg">TOP SELLERS</h4>
              <h2 className="dark:text-[#ecf0f5] text-[rgb(19,23,39)] text-3xl sm:text-5xl max-w-[39rem] font-semibold">Meet our top sellers for this week</h2>
              <div className="containerd gap-4 w-full max-w-[75rem] ">
                  <div className="flex group itemd justify-center items-center">
                    <div className=" bg-[#b0926a94] hidden group-hover:flex animate-Fade absolute w-24 h-24 sm:w-36 sm:h-36 rounded-full"></div>
                    <img src="/sellers/1.jpg" alt="people1" className="rounded-full w-24 h-24 sm:w-36 sm:h-36  object-cover" />
                    <div className="absolute hidden group-hover:flex animate-Fade justify-center items-center w-24 h-24 sm:w-36 sm:h-36">
                      <h3 className="text-[#ecf0f5] cursor-default">Jimmy Newton</h3>
                    </div>
                  </div>
                  <div className="flex group itemd justify-center items-center">
                    <div className=" bg-[#b0926a94] hidden group-hover:flex animate-Fade absolute w-24 h-24 sm:w-36 sm:h-36 rounded-full"></div>
                    <img src="/sellers/2.jpg" alt="people1" className="rounded-full w-24 h-24 sm:w-36 sm:h-36  object-cover" />
                    <div className="absolute hidden group-hover:flex animate-Fade justify-center items-center w-24 h-24 sm:w-36 sm:h-36">
                      <h3 className="text-[#ecf0f5] cursor-default">Jimmy Newton</h3>
                    </div>
                  </div>
                  <div className="flex group itemd justify-center items-center">
                    <div className=" bg-[#b0926a94] hidden group-hover:flex animate-Fade absolute w-24 h-24 sm:w-36 sm:h-36 rounded-full"></div>
                    <img src="/sellers/3.jpg" alt="people1" className="rounded-full w-24 h-24 sm:w-36 sm:h-36  object-cover" />
                    <div className="absolute hidden group-hover:flex animate-Fade justify-center items-center w-24 h-24 sm:w-36 sm:h-36">
                      <h3 className="text-[#ecf0f5] cursor-default">Jimmy Newton</h3>
                    </div>
                  </div><div className="flex group itemd justify-center items-center">
                    <div className=" bg-[#b0926a94] hidden group-hover:flex animate-Fade absolute w-24 h-24 sm:w-36 sm:h-36 rounded-full"></div>
                    <img src="/sellers/4.jpg" alt="people1" className="rounded-full w-24 h-24 sm:w-36 sm:h-36  object-cover" />
                    <div className="absolute hidden group-hover:flex animate-Fade justify-center items-center w-24 h-24 sm:w-36 sm:h-36">
                      <h3 className="text-[#ecf0f5] cursor-default">Jimmy Newton</h3>
                    </div>
                  </div><div className="flex group itemd justify-center items-center">
                    <div className=" bg-[#b0926a94] hidden group-hover:flex animate-Fade absolute w-24 h-24 sm:w-36 sm:h-36 rounded-full"></div>
                    <img src="/sellers/5.jpg" alt="people1" className="rounded-full w-24 h-24 sm:w-36 sm:h-36  object-cover" />
                    <div className="absolute hidden group-hover:flex animate-Fade justify-center items-center w-24 h-24 sm:w-36 sm:h-36">
                      <h3 className="text-[#ecf0f5] cursor-default">Jimmy Newton</h3>
                    </div>
                  </div><div className="flex group itemd justify-center items-center">
                    <div className=" bg-[#b0926a94] hidden group-hover:flex animate-Fade absolute w-24 h-24 sm:w-36 sm:h-36 rounded-full"></div>
                    <img src="/sellers/6.jpg" alt="people1" className="rounded-full w-24 h-24 sm:w-36 sm:h-36  object-cover" />
                    <div className="absolute hidden group-hover:flex animate-Fade justify-center items-center w-24 h-24 sm:w-36 sm:h-36">
                      <h3 className="text-[#ecf0f5] cursor-default">Jimmy Newton</h3>
                    </div>
                  </div><div className="flex group itemd justify-center items-center">
                    <div className=" bg-[#b0926a94] hidden group-hover:flex animate-Fade absolute w-24 h-24 sm:w-36 sm:h-36 rounded-full"></div>
                    <img src="/sellers/7.jpg" alt="people1" className="rounded-full w-24 h-24 sm:w-36 sm:h-36  object-cover" />
                    <div className="absolute hidden group-hover:flex animate-Fade justify-center items-center w-24 h-24 sm:w-36 sm:h-36">
                      <h3 className="text-[#ecf0f5] cursor-default">Jimmy Newton</h3>
                    </div>
                  </div>
              </div>
            </div>
            <div className="text-center flex   w-full pb-24 items-center  justify-center px-4">
              <div className="flex flex-col gap-4 items-center justify-center w-[33.33%]">
                  <span><BsCart2 color="#B0926A" size="40px"/></span>
                  <span className="font-medium text-lg dark:text-[#ecf0f5] text-[rgb(19,23,39)]">Free Shipping</span>
                  <span className="text-[#B3B9C4] max-w-[20rem]">Unlock the savings! Get your favorite items delivered to your doorstep with free shipping on every order. </span>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center w-[33.33%]">
                  <span><AiOutlinePercentage color="#B0926A" size="40px"/></span>
                  <span className="font-medium text-lg dark:text-[#ecf0f5] text-[rgb(19,23,39)]">Top Discount</span>
                  <span className="text-[#B3B9C4] max-w-[20rem]">Score unbeatable deals on your favorite products with our top discount service - saving you money on every purchase! </span>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center w-[33.33%]">
                  <span><MdPayment color="#B0926A" size="40px"/></span>
                  <span className="font-medium text-lg dark:text-[#ecf0f5] text-[rgb(19,23,39)]">Safe Payments</span>
                  <span className="text-[#B3B9C4] max-w-[20rem]">Shop with peace of mind knowing your transactions are secure with our safe payment service, employing industry-leading encryption technology </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

