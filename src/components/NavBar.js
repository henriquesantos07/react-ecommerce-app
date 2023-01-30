import React from 'react';
import logo from '../assets/logo.png';
import { BsFillCartFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { CgEnter } from 'react-icons/cg';


const NavBar = () => {
return (
  <div>
    <div className='flex justify-between bg-white p-5 border-b'>
        {/*Esquerda*/}
        <div className='flex gap-x-20'>
            <img src={logo} alt='logo' className='h-10'/>
            <div className='flex gap-x-10 mt-3 text-[gray]'>
              <a href='site.com'>HOMEM</a>
              <a href='site.com'>MULHER</a>
              <a href='site.com' className='text-[red]'>PROMOS</a>
            </div>
        </div>




        {/*Esquerda*/}
        <div className='flex gap-x-5 '>
           <a href='#'><CgEnter className='h-10 w-6'/></a>
          <a href='#'><FaUserAlt className='h-10 w-5'/></a>
          <a href='#'><BsFillCartFill className='h-10 w-6' /></a>
      
        </div>




    </div>
  </div>  
)
}




export default NavBar