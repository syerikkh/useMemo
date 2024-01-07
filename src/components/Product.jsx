import React from 'react'

export const Product = ({ id, name, price, addCart }) => {

    return (
        <div className='border-solid border-2 border-indigo-600 p-2 w-[330px] gap-2'>
            <h1 className='font-semibold text-gray-600'>Name : {name}</h1>
            <p className='font-bold'>${price}</p>
            <button onClick={addCart} className='bg-black text-white p-2 rounded-md'>Add to Cart</button>
        </div>
    )
}
