import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import produtos from './Produtos'
import { Link } from 'react-router-dom'
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

    const location = useLocation();

    console.log(location)
    const {productId} = useParams();

    const params = useParams();
    console.log(params)

    if(isLoading){
      return <Spinner />
    }
    

    const produto = produtos.find(p => p.name === productId)
    console.log(productId)
  return <ItemDetail produto={produto} />
  
}

export default ItemDetailContainer