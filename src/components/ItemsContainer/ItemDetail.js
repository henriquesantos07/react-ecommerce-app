import React, {useContext} from 'react';
import ItemCount from './ItemCount'
import { useCart } from '../../contexto/CartProvider';



const ItemDetail = ({title, price, image, isSale, stock, salePrice }) => {
  
  const {addToCart} = useCart()
  

  function handleAdd(count){
    addToCart({product: title, qtd: count, productTitle: title, price: price})
  }

  
  return (
    <div className='flex items-center justify-center'>
        <div className='flex flex-col md:flex-row'>
            <div className='h-50 w-50 p-3 md:h-400 md:w-400 md:space-x-10'>
                <img src={image} className='rounded-xl' alt='foto'/>
            </div>
            <div className='flex flex-col items-center space-y-2'>
                <h1 className='text-2xl font-bold'>{title}</h1>

                <p>
                  {isSale ? 
                  <div>
                    <del>{price}</del>
                    <p>{salePrice}</p>
                  </div>
                  : price
                }
                
                </p>
                <p>Com tecnologia Insider, a Tech T-shirt é nossa releitura tech da camiseta básica masculina. Feita com fibras macias que se adaptam ao corpo, acompanha seus movimentos e não esquenta. Essa t-shirt não precisa ser passada e não desbota com o tempo, é um item tecnologicamente essencial para uma rotina confortável.</p>
                <ItemCount onAdd={handleAdd} stock={stock} initial={1}/>  
            </div>
        </div>    
    </div>
  )
}

export default ItemDetail