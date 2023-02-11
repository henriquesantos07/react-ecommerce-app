import React from 'react'
import ItemDetail from './ItemDetail'
import produtos from './Produtos'

const ItemDetailContainer = () => {
  return (
    <div>
        {produtos.map(produtos => (
            <ItemDetail 
                key={produtos.key}
                title={produtos.title}
                price={produtos.price}
            />
        ))}    
    </div>
  )
}

export default ItemDetailContainer