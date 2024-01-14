
import { ShoppingCart } from '@/components/ShoppingCart'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='p-2'>
      Products:
      <ShoppingCart />
    </div>

  )
}
