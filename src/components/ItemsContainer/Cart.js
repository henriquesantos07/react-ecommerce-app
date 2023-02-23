import React from 'react'
import { useCart } from "../../contexto/CartProvider"

const Cart = () => {
  
  const {cart, removeFromCart, cartQuantity, clearCart} = useCart();
  
  
  return (
    <div>
      <h1>Carrinho {cartQuantity}</h1>
      {cart.map(p => 
      
      <li>
        {p}
        <button onClick={() => removeFromCart(p)}> X </button>
        <button onClick={() => clearCart()}>remover tudo</button>
      </li>
      
      )}
    </div>
  )
}

export default Cart