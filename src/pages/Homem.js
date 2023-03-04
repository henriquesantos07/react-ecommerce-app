import React from 'react'
import produtos from '../Produtos/Produtos'
import Items from '../components/ItemsContainer/Item'

const Masculino = () => {
  const produtosMasculinos = produtos.filter(produto => produto.category === 'masculino');
  
  return (
    <div className='flex justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {produtosMasculinos.map(p => (
        <Items 
          key={p.id}
          link={p.link}
          image={p.image}
          title={p.title}
          price={p.price}
        />
      ))} 
    </div>
  )
}

export default Masculino