import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
export default function LoginForm() {
  return (
    <div className="flex justify-center items-center">
        <form action="">
            <div className="flex flex-col gap-5 px-10 py-8">
                <div className="w-full flex justify-center items-center">
                <div className="text-2xl font-bold text-center">Welcome back</div>
                </div>
                <div className="flex flex-col gap-1">
                      <div className=" text-sm font-normal">
                        Email :
                      </div>
                      <Input
                          type="email"
                          placeholder="email@example.com"
                          className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                          labelProps={{
                            className: "hidden",
                          }}
                          containerProps={{ className: "min-w-[100px]" }} crossOrigin={undefined}/>                
                </div>
                <div className="flex flex-col gap-1">
                      <div className=" text-sm font-normal">
                        Password :
                      </div>
                      <Input
                    type="password"
                    placeholder="Password"
                    
                    className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }} crossOrigin={undefined}/>   
                    <div className="text-xs mt-1">Effortlessly access your account using your email and password, You can learn more if you visit our privacy and policy </div>     
                </div>
                
                <div className="flex flex-col gap-9">
                  <div className="w-full mt-6">
                    <Button size="md" placeholder={undefined} className="w-full h-12 text-base">Sign in</Button>
                  </div>
                  <div className="flex gap-4 ">
                    <Button size="md" placeholder={undefined} className="w-full h-14 text-base !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500"><img src="google.png" alt="Logo" className='hidden sm:inline h-5 w-5'/> </Button> 
                    <Button size="md" placeholder={undefined} className="w-full h-14 text-base !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500"><img src="facebook.png" alt="Logo" className='hidden sm:inline h-5 w-5'/></Button>
                  </div>
                </div>
                

              </div>
        </form>
    </div>
  )
}
