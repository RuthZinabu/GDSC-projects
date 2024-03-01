 import React, { createContext, useState, UseState } from 'react'
 import {Products} from '../data.js'

export const CartContext = createContext(null)

const getDefaultCart = () => {
  let cart = {};
  for (let i=1; i < Products.length+1; i++){
    cart[i]=0
  }
  return cart;
}

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

   const getTotalCartAmount = () => {
      let totalAmount = 0;
      for(const item in cartItems){
        if (cartItems[item] > 0){
          let itemInfo =  Products.find((product)=> product.id == Number(item))
   totalAmount += cartItems[item]  * itemInfo.price   
    }
    }
    return totalAmount
  }

    const addToCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
      setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
 
 const c={ cartItems,getTotalCartAmount, addToCart, removeFromCart }
   //the fisrt export after the imports 
 return <CartContext.Provider value = {c} >
     {children}
     </CartContext.Provider>

     
}
export const useCart = () => {
  return useContext(CartContext);
};












 