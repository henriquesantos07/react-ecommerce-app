import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext({});


function CartProvider({children}){
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item){
    if(cartItems.includes(item)){
      return
    }
    setCartItems(oldCart => [...oldCart, item])
  }

  function removeFromCart(item){
    setCartItems(oldCart => oldCart.filter((p) => p !== item));  
  }

  const cartQuantity = cartItems.reduce((currentVal, prevVal) => {
    return prevVal + currentVal.price
  }, 0)


  return (
    <CartContext.Provider value ={{
        cartItems, 
        addToCart, 
        removeFromCart,
        cartQuantity 
        
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

export const useCart = () => useContext(CartContext); 




