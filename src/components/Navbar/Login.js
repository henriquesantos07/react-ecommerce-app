import React from 'react'
import { BsFillCartFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { CgEnter } from 'react-icons/cg';

export const Login = () => {
  return (
    <div className='flex gap-x-5 '>
        <a href='/register'><CgEnter className='h-10 w-6'/></a>
        <a href='/user'><FaUserAlt className='h-10 w-5'/></a>
        <a href='/cart'><BsFillCartFill className='h-10 w-6' /></a>    
    </div>
  )
}

export default Login
