import ProductCard from '@/components/Product/ProductCard'
import Image from 'next/image'

export default function Home() {
  return (
  <>
  <h1>bunny Shop</h1>
  <div className='flex flex-wrap w-full px-6'>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>
  <ProductCard/>

  </div>

  
  </>
  )
}
