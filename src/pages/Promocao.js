import React from 'react'
import Items from '../components/ItemsContainer/Item'

const Promocao = ({produtos}) => {
  return (
    <div className='flex justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {produtos.map(p => (
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

export default Promocao