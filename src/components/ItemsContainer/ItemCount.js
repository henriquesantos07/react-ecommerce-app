import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ( {onAdd, stock, initial} ) => {
  const [count, setCount] = useState(initial);

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
    onAdd(count)
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