import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { CgEnter } from 'react-icons/cg';
import { Link } from 'react-router-dom'
import { useCart } from '../../contexto/CartProvider';

export const Login = () => {
  const {cartQuantity} = useCart();
  return (
    <div className='flex gap-x-5 '>
        <a href='/register'><CgEnter className='h-10 w-6'/></a>
        <a href='/user'><FaUserAlt className='h-10 w-5'/></a>
        <Link to='/carrinho'>{cartQuantity}<BsFillCartFill className='h-10 w-6' /></Link>   
    </div>
  )
}

export default Login
