import React from 'react'
import produtos from '../Produtos/Produtos'
import Items from './ItemsContainer/Item'

const Categories = () => {
  
   const produtosMasculino = produtos.filter(p => p.category === 'masculino')
   
    const handleClick = produtosMasculino.map(p => 
        <Items 
            key={p.id}
            link={p.link}
            image={p.image}
            title={p.title}
            price={p.price}    
        />)
  
  
    return (
    <div className='flex items-center justify-center'>
        <div className='flex space-x-10 mt-10'>
            <h1 onClick={handleClick}>HOMEM</h1>
            <h1>MULHER</h1>
        </div>
    </div>
  )
}

export default Categories