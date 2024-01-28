interface Servicesprops{
    title: string,
    discreption: string
}
export default function Services(config: Servicesprops) {
  return (
    <div className="px-1 sm:px-12 flex-col flex gap-2 animate-DownToUp">
        <div className="sm:text-3xl sm:px-0 px-2 text-[1.3rem] ml-4 font-bold text-[rgb(19,23,39)]">{config.title}</div>
        <p className="ml-4 text-sm sm:px-0 px-2 text-blue-gray-500">{config.discreption}</p>
        <div className="w-full flex justify-center   ">
            <div className="bg-[#F1E4C3] rounded-3xl w-full h-96">
                <div className="bg-[#B0926A] rounded-3xl absolute left-[2rem] max-w-[90rem] w-full h-[22rem] bottom-4"> </div>
            </div>
        </div>
    </div>
    
  )
}
