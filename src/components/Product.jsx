import React from 'react'

export const Product = ({ name, price }) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Price: {price}</h1>
            <button className='border-solid border-2 border-white bg-amber-300 text-black'>Add to Cart</button>
        </div>
    )
}
