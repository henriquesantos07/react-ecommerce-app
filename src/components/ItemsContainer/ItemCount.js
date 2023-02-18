import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ( {onConfirm, stock} ) => {
  const [count, setCount] = useState(1);

  function decrement(){
    if(count > 1){
      setCount(count - 1) 
    }   
  }
  
  function increment(){
    if(count < stock){
      setCount(count + 1)  
    }
  }

  function handleClick(){
    const valor = count;
    onConfirm(valor)
  }
  
  return (
    <div className='flex items-center justify-center mt-4 space-x-5 font-bold'>
        <button onClick = {decrement}>-</button>
        <span>{count}</span>
        <button onClick = {increment}>+</button>
        <p>Estoque disponível: {stock} </p>
        <Link to='/carrinho'><button onClick={handleClick} className='bg-black text-white'>Adicionar ao Carrinho</button></Link>     
    </div>
  )
}

export default ItemCount