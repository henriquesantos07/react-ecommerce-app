import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { CgEnter } from 'react-icons/cg';
import { Link } from 'react-router-dom'
import { useCart } from '../../contexto/CartProvider';

export const Login = () => {
  const {cartQuantity } = useCart();
  return (
    <div className='flex gap-x-5 '>
        <CgEnter className='h-10 w-6'/>
        <Link to='/login'><FaUserAlt className='h-10 w-5'/></Link>
        {cartQuantity > 0 ? <p>{cartQuantity}</p> : null}
       {cartQuantity > 0 ? <Link to='/carrinho'><BsFillCartFill className='h-10 w-6' /></Link> : null }
    </div>
  )
}

export default Login
