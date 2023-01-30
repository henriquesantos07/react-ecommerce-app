import React from 'react'


const Titulo = ({produto, tamanho, cor, sexo}) => {
 return(
   <h1>
     {produto} {tamanho} {cor} {sexo}
   </h1>
 );
};


const ItemListContainer = () => {
 return (
   <div className='flex items-center justify-center mt-4'>
     <Titulo produto='Camiseta'  tamanho='M' cor='Preta' sexo='Masculina' />
   </div>
 )
}


export default ItemListContainer