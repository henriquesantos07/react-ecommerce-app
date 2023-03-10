import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import produtos from '../../Produtos/Produtos'
import Spinner from '../Spinner'
import { useLocation, useParams } from 'react-router-dom'

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

          }, 100
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

    const location = useLocation();
    console.log(location)
    const {id} = useParams();

    const params = useParams();
    console.log(params)

    if(isLoading){
      return <Spinner />
    }
    

    const produto = produtos.find(p => p.name === id)
    console.log(id)

  return <ItemDetail 
            produto={produto} 
            key={produto.id}
            image={produto.image}
            title={produto.title}
            price={produto.price}
            salePrice={produto.salePrice}
            stock={produto.stock}
          />
  
}

export default ItemDetailContainer