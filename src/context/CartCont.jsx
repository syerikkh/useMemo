import { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, curr) => acc + curr.price, 0)
    }, [cart])

    return <CartContext.Provider value={{ cart, addToCart, totalPrice }}>
        {children}
    </CartContext.Provider>

}