import React from 'react';
import camisaBranca from '../assets/camisaBranca.png';

const Items = (props) => {
  return (
    <div className='flex justify-center'>
        <div key={props.id} className='p-0 bg-white mt-10'>
          {/* Image */}
          <div>
            <img src={camisaBranca} alt='logo' className='h-60 rounded-xl'/>
          </div>
          {/*Title */}
          <div>
            <h1 className='font-extrabold mt-5 ml-1 text-lg'>{props.title}</h1>
          </div>
          {/* Price */}
          <div>
            <p className='font-thin text-xs ml-1 mt-2'>{`A partir de R$ ${props.price}`}</p>
          </div>
        </div>
    </div>
  )
}

export default Items;