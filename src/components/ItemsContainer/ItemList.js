import React, { useEffect, useState } from 'react'
import Items from './Item';
import Spinner from '../Spinner';
import produtos from '../../Produtos/Produtos';
import { collection, doc, getDocs, getFirestore } from 'firebase/firestore';



const ItemList = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    function getData() {
      const db = getFirestore();
      const categoriesRef = collection(db, 'items')  doc(db, 'items', id)
      return getDocs(categoriesRef)
        .then((snapshot) => {
          const items = [];
          console.log(items)
          snapshot.forEach((p) =>
          items.push({
            id: p.id,
            image: p.data().image,
            link: p.data().link,
            title: p.data().title,
            price: p.data().price,
            isSale: p.data().isSale,
            category: p.data().category
          }))
          return items
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
      
      {
        data.map(p => (
          <Items 
            key={p.key}
            image={p.image}
            title={p.title}
            price={p.price}
            isSale={p.isSale}
            salePrice={p.salePrice}
            link={p.link}
          />
      ))}
                 
    </div>
  )
}

export default ItemList;