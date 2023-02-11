import React from 'react';
import Categoria from './Categoria';
import Login from './Login';



const NavBar = () => {
return (
  <div>
    <div className='flex justify-between bg-white p-5 border-b'>
        
        {/*Esquerda*/}
        <Categoria />
        
        {/*Direita*/}
        <Login />
    </div>
  </div>  
)
}




export default NavBar