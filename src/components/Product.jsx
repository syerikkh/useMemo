import { CartContext } from '@/context/CartCont'
import React, { useContext } from 'react'

export const Product = ({ id, name, price }) => {
    const { addToCart } = useContext(CartContext);

    const handleCart = () => {
        addToCart({ id, name, price })
    }

    return (
        <div className='border-solid border-2 border-indigo-600 p-2 w-[330px] gap-2'>
            <h1 className='font-semibold text-gray-600'>Name : {name}</h1>
            <p className='font-bold'>{price}$</p>
            <button onClick={handleCart} className='bg-black text-white p-2 rounded-md'>{console.log(handleCart)}Add to Cart</button>
        </div>
    )
}
