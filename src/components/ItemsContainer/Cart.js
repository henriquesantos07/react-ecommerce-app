import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from "../../contexto/CartProvider"
import { CiCircleRemove } from 'react-icons/ci';

const Cart = () => {

  const { cartItems, removeFromCart, cartQuantity, clearCart } = useCart();
  
  const totalPrice = cartItems.reduce((prevVal, currentVal) => {
    return prevVal + (currentVal.price * currentVal.qtd)
  }, 0)
  
  const qtdTotal = cartItems.reduce((prevVal, currentVal) =>{
    return prevVal + currentVal.qtd
  }, 0)


  return (
    <div>
      {cartQuantity === 0 ? <p className='flex items-center justify-center p-40 font-bold text-4xl'>Carrinho Vazio, <a href='/' className='text-blue-800'>voltar para o site</a></p> : null }
      {cartItems.map(item => 
      
      <li className='flex items-center justify-between mx-40 p'>

        <div className='flex items-center justify-end'>
          <p>{item.productTitle}</p>
        </div>

        <div className='flex items-center justify-start space-x-10'>
        <p>{item.price}</p>
        </div>

        <div>
          <button onClick = {() => item.qtd - 1}>-</button>
            {item.qtd}
          <button onClick = {() => item.qtd + 1}>+</button>
        </div>

        <button onClick={() => removeFromCart(item)}> <CiCircleRemove className='w-7 h-7'/></button>
      </li>
      
      )}
      
      { qtdTotal > 0 ? <div>
        <h1>Preço total: {totalPrice}</h1>
        <h1>Quantidade de itens: {qtdTotal}</h1>
      </div> : null }
      
      { qtdTotal > 0 ? <div>
        <Link to='/checkout'><button>Finalizar a compra</button></Link>
      </div> : null}
      
      { qtdTotal > 0 ? <div>
        <Link to='/'><button>Continuar comprando</button></Link>
      </div> : null }
      
      { qtdTotal > 0 ? <div>
        <button onClick={clearCart}>Limpar carrinho</button>
      </div> : null }
    </div>
  )
}

export default Cart