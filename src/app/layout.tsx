
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { IoSettingsOutline } from "react-icons/io5";
import Navbar from '@/components/Navbar';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BunnyShop',
  description: 'Generated by BunnyShop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
 
  return (
    <html lang="en">
      
      <body className={inter.className}>
    <div className='flex  items-center bg-white text-black  justify-between px-10 p-3 shadow-sm'>
        <img src="smile.png" alt="Logo" className='h-[45px] w-[45px]'/>
        <Navbar/>
      <div className='flex justify-between'>
          {/* search */}
          <div className='max-w-md'>
            <div className="relative flex items-center w-full h-12 rounded-xl focus-within:shadow-md bg-slate-50 overflow-hidden">
                <div className="grid place-items-center h-full w-12 text-gray-300 bg-slate-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-slate-50"
                type="text"
                id="search"
                placeholder="Search" /> 
            </div>
          </div>

        <hr className="mr-8 ml-4 bg-gray-200 border-0 dark:bg-gray-300 h-12 w-px shadow-md"/>
        {/* Profil */}
        <div className='flex gap-3 justify-center items-center'>
          <img src="https://i.pinimg.com/originals/79/42/75/7942750d1f3b82cd136bd8f726a2aa04.jpg" alt="logo" className='rounded-full w-8 h-8' />
          <div className='flex flex-col '>
            <div className='text-sm font-semibold '>Hanane Bouzaga</div>
            <div className='text-xs text-gray-400 font-medium'>Han8@gmail.com</div>
            
          </div>
          {/* Button */}
        <div className='rounded-lg bg-slate-50 p-3 ml-4 h-10 w-10'>
        <IoSettingsOutline/>
        </div>
        </div>
        
      </div>
    </div>
   
     
        {children}
        </body>
    </html>
  )
}
