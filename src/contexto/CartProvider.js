import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext("String");


function CartProvider({children}){
  const [cart, setCart] = useState([]);

  function addToCart(produto){
    if(cart.includes(produto)){
      return
    }
    setCart(oldCart => [...oldCart, produto])
  }

  function removeFromCart(produto){
    setCart(oldCart => oldCart.filter((p) => p !== produto));  
  }

  
  function clearCart(){
    setCart(oldCart => oldCart.clear())
  }

  return (
    <CartContext.Provider value ={{cart, addToCart, removeFromCart, cartQuantity: cart.length, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

export const useCart = () => useContext(CartContext); 




