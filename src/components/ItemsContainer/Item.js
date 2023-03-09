import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Items = ({id, image, title, price, link, category, isSale, salePrice}) => {
  const [item, setItem] = useState({});

  function getItemsFromFirestore() {
    const db = getFirestore();
    const categoriesRef = collection(db, 'items')
    getDocs(categoriesRef)
      .then((snapshot) => {
        const items = [];
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
      })
  }

  useEffect(() => {
    getItemsFromFirestore()
  }, []);
  
  
  return (
    <div className='flex justify-center'>
        <Link to={link}><div key={id} className='p-0 bg-white mt-10'>
          {/* Image */}
          <div>
            <img src={image} alt='logo' className='h-60 rounded-xl'/>
          </div>
          {/*Title */}
          <div>
            <h1 className='font-extrabold mt-5 ml-1 text-lg'>{title}</h1>
          </div>
          {/* Price */}
          <div>

            <p className='font-thin text-xs ml-1 mt-2'>{isSale ? 
            <div>
              <del>{price}</del> 
              <p>{salePrice}</p>
            </div>  
            
            : price}</p>
          </div>
          
          <div>
            <p>{category}</p>
          </div>
        </div></Link>
    </div>
  )
}

export default Items;