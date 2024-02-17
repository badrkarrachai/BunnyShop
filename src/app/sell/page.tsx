import HeroSell from "@/components/CustomComponents/HeroSell";
import { FiPieChart } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";

export default function page() {
  return (
    <>
      <div className="space-y-28">
        <HeroSell/>
        <div className="flex justify-center items-center px-4">
          <div className="max-w-[100rem] space-y-12">
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
            <div className="text-center flex flex-col gap-5 w-full items-center justify-center">
              <h4 className="text-[#B0926A] font-semibold text-lg">Export team</h4>
              <h2 className="dark:text-[#ecf0f5] text-[rgb(19,23,39)] text-3xl sm:text-5xl max-w-[39rem] font-semibold">Meet our Top sellers for this week</h2>
              <div className="flex gap-5">
                  <img src="/sellers/1.jpg" alt="people1" className="rounded-full w-32 h-32 object-cover" />
                  <img src="/sellers/2.jpg" alt="people2" className="rounded-full w-32 h-32 object-cover" />
                  <img src="/sellers/3.jpg" alt="people2" className="rounded-full w-32 h-32 object-cover" />
                  <img src="/sellers/4.jpg" alt="people2" className="rounded-full w-32 h-32 object-cover" />
                  <img src="/sellers/5.jpg" alt="people2" className="rounded-full w-32 h-32 object-cover" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

