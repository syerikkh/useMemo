import React, { useContext, useEffect, useState } from 'react'
import { Product } from './Product'
import { CartContext } from '@/context/CartCont';

export const ShoppingCart = () => {
    const { cart, addToCart } = useContext(CartContext);
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const res = await fetch('/product.json')
        const data = await res.json();
        setData(data);
    }
    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div className='flex gap-60'>
            <div className='flex flex-col gap-2'>
                {data.map((product) => (
                    <div>
                        <Product key={product.id}
                            name={product.name}
                            price={product.price}
                        />
                    </div>
                ))}
            </div>
            <div>
                Shopping Cart

            </div>
        </div>
    )
}
