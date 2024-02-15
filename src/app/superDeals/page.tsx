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
      <ProductCard btnVisibile={false} title='Brand new' discreption='Explore more than 10,000 products and assets with the best price.' 
          image1="https://i.pinimg.com/originals/6e/70/3a/6e703a91d4847a728852e50d2fe39761.jpg"
          image2="https://i.pinimg.com/originals/fa/1f/53/fa1f5353e215cadea662c76b4ec45505.jpg"
          image3="https://i.pinimg.com/originals/20/8c/41/208c417ddbe87185a0c2ae4cc6fded7a.jpg"
          image4="https://i.pinimg.com/originals/3b/fa/b6/3bfab65a642e052e846fed073311cd74.jpg"
          image5="https://i.pinimg.com/originals/1d/7e/17/1d7e1793483f930bbd683fe000d36213.jpg"/>

      <div className='flex flex-col gap-12'>
   
   
      <div className='h-10'></div>
    </div>
    </div>
    </div>
  </>  )
}
