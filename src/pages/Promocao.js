import React from 'react';
import Items from '../components/ItemsContainer/Item';
import produtos from '../Produtos/Produtos';

const Promocao = () => {
  const produtosNaPromocao = produtos.filter(produto => produto.isSale === true);
  
  return (
    <div className='flex justify-center grid grid-cols-2 md:grid-cols-3 p-7 lg:grid-cols-4'>
      {produtosNaPromocao.map(produto => (
        <Items 
        key={produto.id}
        link={produto.link}
        image={produto.image}
        title={produto.title}
        price={produto.price}
        />
      ))}
    </div>
  )
}

export default Promocao