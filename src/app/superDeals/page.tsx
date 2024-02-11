import Hero from '@/components/CustomComponents/Hero'
import Services from '@/components/CustomComponents/Services'
import HeroSuperDeals from '@/components/CustomComponents/HeroSuperDeals'
import Categorys from '@/components/Product/Categorys'
import ProductCard from '@/components/Product/ProductCard'

import Image from 'next/image'
export default function page() {
  return (
<>
    <div className='w-full flex justify-center items-center'>
    <div className='max-w-[100rem]'>
      <HeroSuperDeals/>
      <div className='flex flex-col gap-12'>
   
   
    <div className='h-10'></div>
    </div>
    </div>
    </div>
  </>  )
}
