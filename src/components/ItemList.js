import { useEffect, useState } from 'react';
import React from 'react'
import Spinner from './Spinner';


const ItemList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]) ;   

    function getData(isSuccess = true){
        return new Promise((resolve, reject) => {
            setTimeout(
                () => {
                    if(isSuccess){
                        resolve(produtos);
                    }
                    reject('Deu erro')
                }, 3000
            )
        })
    }
    
    useEffect(() => {
        getData()
            .then(retorno => {
                setData(retorno);
            })
    },[]);
    
    const produtos = [
            {id: 1, title: 'Camisa branca', price: 79},
            
            
        ]
    if(isLoading){
        return <Spinner />
    }
  
    return (
    <div className='flex flex-col items-center justify-center mt-10'>
        {data.map(d => <h1>{d.title}</h1>)}
        {data.map(d => <p>{d.price}</p>)} 
    </div>
  )
}

export default ItemList;