import React, { useEffect, useState } from 'react'
import Items from './Item';
import produtos from './Produtos';
import Spinner from './Spinner';


const ItemList = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    function getData(isSuccess = true){
      return new Promise((resolve, reject) => {
        setTimeout(
          () => {
            if(isSuccess){
              resolve(produtos)
            }
            reject('Problemas no BD')

          }, 2000
        )
      })
    }
    
    useEffect(() => {
      getData()
        .then(retorno => {
          setData(retorno);
          setIsLoading(false);
        }

        )
    }, [])

    if(isLoading){
      return <Spinner />
    }
    
    return (
    <div className='flex items-center justify-between grid grid-cols-2 space-x-4 px-2 md:grid-cols-3 lg:grid-cols-4 md:px-10'>
      {produtos.map(produtos => (
        <Items
          image={produtos.image} 
          title={produtos.title}
          price={produtos.price}
        />  
      ))}          
    </div>
  )
}

export default ItemList;