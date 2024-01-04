import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Product } from '@/components/Product'
import { ShoppingCart } from '@/components/ShoppingCart'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Product />
      <ShoppingCart />
    </div>
  )
}
