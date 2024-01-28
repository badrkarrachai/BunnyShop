import Hero from '@/components/CustomComponents/Hero'
import Services from '@/components/CustomComponents/Services'
import Categorys from '@/components/Product/Categorys'
import ProductCard from '@/components/Product/ProductCard'

import Image from 'next/image'

export default function Home() {
  return (
  <>
    <div className='w-full flex justify-center items-center'>
    <div className='max-w-[100rem]'>
    <Hero/>
    <div className='flex flex-col gap-12'>
   
    <ProductCard title='Brand new' discreption='Explore more than 10,000 products and assets with the best price.' 
    image1="https://i.pinimg.com/originals/6e/70/3a/6e703a91d4847a728852e50d2fe39761.jpg"
    image2="https://i.pinimg.com/originals/fa/1f/53/fa1f5353e215cadea662c76b4ec45505.jpg"
    image3="https://i.pinimg.com/originals/20/8c/41/208c417ddbe87185a0c2ae4cc6fded7a.jpg"
    image4="https://i.pinimg.com/originals/3b/fa/b6/3bfab65a642e052e846fed073311cd74.jpg"
    image5="https://i.pinimg.com/originals/1d/7e/17/1d7e1793483f930bbd683fe000d36213.jpg"/>
    <ProductCard title='Popular products' discreption="Explore The most popular products in our platform, Based on the buyer's reviews."
    image1="https://i.pinimg.com/564x/31/b0/15/31b015de3ac2ed833e9488de9f738401.jpg"
    image2="https://i.pinimg.com/originals/a6/d2/88/a6d288f294fa15336fedb05c5928e69c.jpg"
    image3="https://i.pinimg.com/564x/b1/76/0b/b1760b527fb71744f781494647c2f6be.jpg"
    image4="https://i.pinimg.com/564x/b5/1a/0c/b51a0ca63efb49d2a58b04228d6ccc69.jpg"
    image5="https://i.pinimg.com/564x/32/d3/35/32d335068ac672d1efc5e05a806962d3.jpg"/>
    <Categorys title='Shop by categories' discreption='You can start your shopping journey by selecting a product category.'/>
    <Services title='Services' discreption='Explore more than 10,000 products and assets with the best price.' />
    <div className='h-44'></div>
    </div>
    </div>
    </div>
  </>
  )
}
