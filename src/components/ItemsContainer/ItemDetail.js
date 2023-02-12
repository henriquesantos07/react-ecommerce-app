import React from 'react';
import camisaBranca from '../../assets/camisaBranca.png';

const ItemDetailContainer = (props) => {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex flex-col md:flex-row'>
            <div className='h-50 w-50 p-3 md:h-65 md:w-65 md:space-x-10'>
                <img src={camisaBranca} className='rounded-xl' alt='foto'/>
            </div>
            <div className='flex flex-col items-center space-y-2'>
                <h1 className='text-2xl font-bold'>{props.title}</h1>
                <p>R$ {props.price}</p>
                <p>Com tecnologia Insider, a Tech T-shirt é nossa releitura tech da camiseta básica masculina. Feita com fibras macias que se adaptam ao corpo, acompanha seus movimentos e não esquenta. Essa t-shirt não precisa ser passada e não desbota com o tempo, é um item tecnologicamente essencial para uma rotina confortável.</p>
                <button className='bg-black text-white'>Adicionar ao Carrinho</button>    
            </div>
        </div>    
    </div>
  )
}

export default ItemDetailContainer