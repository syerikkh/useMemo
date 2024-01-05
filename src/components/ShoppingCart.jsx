import React, { useEffect, useState } from 'react'
import { Product } from './Product';

export const ShoppingCart = () => {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const res = await fetch('/product.json')
        const data = await res.json();
        setData(data)
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='flex justify-between'>
            <div className='flex flex-col gap-2'>
                {data.map((products) => {
                    return (
                        <div className='border-solid border-2 border-sky-500 w-[300px] rounded-md p-1'><Product name={products.name} price={products.price} /></div>
                    )
                })}
            </div>
            <div className='mr-[700px] w-[400px] p-10 rounded-md'>
                <h1>Shopping cart</h1>
                <li></li>
            </div>
        </div>
    )
}
