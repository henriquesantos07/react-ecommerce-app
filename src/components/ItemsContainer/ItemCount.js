import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ( {onAdd, stock, initial} ) => {
  const [valor, setValor] = useState(initial);

  function decrement(){
    if(valor > 1){
      setValor(valor - 1) 
    }   
  }
  
  function increment(){
    if(valor < stock){
      setValor(valor + 1)  
    }
  }

  function handleClick(){
    onAdd(valor)
  }
  
  return (
    <div className='flex items-center justify-center mt-4 space-x-5 font-bold'>
        <button onClick = {decrement}>-</button>
        <span>{valor}</span>
        <button onClick = {increment}>+</button>
        <p>Estoque disponível: {stock} </p>
        <Link to='/carrinho'><button onClick={handleClick} className='bg-black text-white'>Adicionar ao Carrinho</button></Link>     
    </div>
  )
}

export default ItemCount