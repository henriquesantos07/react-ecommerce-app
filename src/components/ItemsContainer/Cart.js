import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from "../../contexto/CartProvider"
import { CiCircleRemove } from 'react-icons/ci';

const Cart = () => {
  
  const { cartItems, removeFromCart, cartQuantity } = useCart();
  
  const totalPrice = cartItems.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.price
  }, 0)
  
  const qtdTotal = cartItems.reduce((prevVal, currentVal) =>{
    return prevVal + currentVal.qtd
  }, 0)
  
  return (
    <div>
      {cartQuantity === 0 ? <p className='flex items-center justify-center p-40 font-bold text-4xl'>Carrinho Vazio, <a href='/' className='text-blue-800'>voltar para o site</a></p> : null }
      {cartItems.map(item => 
      
      <li className='flex items-center justify-between mx-40 p'>
        <div className='flex space-x-10'>
          <p>{item.productTitle}</p>
          <p>{item.price}</p>
        </div>
          {item.qtd}
        <button onClick={() => removeFromCart(item)}> <CiCircleRemove className='w-7 h-7'/></button>
      </li>
      
      )}
      <h1>Preço total: {totalPrice}</h1>
      <h1>Quantidade de itens: {qtdTotal}</h1>
      <div>
        <Link to='/checkout'><button>Finalizar a compra</button></Link>
      </div>
      <div>
        <Link to='/'><button>Continuar comprando</button></Link>
      </div>
    </div>
  )
}

export default Cart