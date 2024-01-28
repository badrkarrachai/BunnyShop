interface Servicesprops{
    title: string,
    discreption: string
}
export default function Services(config: Servicesprops) {
  return (
    <div className="px-1 sm:px-12 flex-col flex gap-2 animate-DownToUp">
        <div className="sm:text-3xl sm:px-0 px-2 text-[1.3rem]  font-bold text-[rgb(19,23,39)]">{config.title}</div>
        <p className="text-sm sm:px-0 px-2 text-blue-gray-500">{config.discreption}</p>
        <div className="flex flex-col gap-8">
          <div className="w-full flex gap-8">
              <div className="bg-[#F1E4C3] rounded-[2rem] w-[65%] h-[23.5rem]"></div>
              <div className="bg-[#B0926A] rounded-[2rem] w-[35%] h-[23.5rem]"></div>
          </div>
          <div className="bg-[#EDD8C7] rounded-[2rem] w-[100%] h-[23.5rem]"></div>
        </div>
    </div>
    
  )
}
