import React, { useState } from 'react'

const ItemCount = ( {stock, initial}) => {
  const [count, setCount] = useState(initial);

  function decrement(){
    if(count > 0){
      setCount(count - 1) 
    }   
  }
  
  function increment(){
    if(count < stock){
      setCount(count + 1)  
    }
  }
  
  return (
    <div className='flex items-center justify-center mt-4 space-x-5 font-bold'>
        <button onClick = {decrement}>-</button>
        <span>{count}</span>
        <button onClick = {increment}>+</button>    
    </div>
  )
}

export default ItemCount