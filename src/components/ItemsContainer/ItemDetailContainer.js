import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import produtos from './Produtos'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner'

const ItemDetailContainer = () => {
  
  const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    function getItem(isSuccess = true){
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
      getItem()
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
    <div>
      {produtos.map(produtos => (
        <ItemDetail
          key={produtos.key}
          image={produtos.image} 
          title={produtos.title}
          price={produtos.price}
        />  
      ))}   
    </div>
  )
}

export default ItemDetailContainer