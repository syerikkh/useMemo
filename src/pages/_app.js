import '@/styles/globals.css'
import { CartProvider } from '@/context/CartCont'

export default function App({ Component, pageProps }) {
  return <CartProvider>
    <Component {...pageProps} />
  </CartProvider >
}
