import Hero from '@/components/CustomComponents/Hero'
import ProductCard from '@/components/Product/ProductCard'

import Image from 'next/image'

export default function Home() {
  return (
  <>
    <div className='w-full flex justify-center items-center'>
    <div className='max-w-[100rem]'>
    <Hero/>
    <div className='flex flex-col gap-12'>
    <ProductCard title='Brand new' discreption='Explore more than 10,000 products and assets with the best price.'/>
    <ProductCard title='Popular products' discreption="Explore The most popular products in our platform, Based on the buyer's reviews."/>
    </div>
    </div>
    </div>
  </>
  )
}
