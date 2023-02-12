import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';

const Categoria = () => {
  return (
    <div className='flex gap-x-20'>
           <Link to='/' ><img src={logo} alt='logo' className='h-10' /></Link>
            <div className='flex gap-x-10 mt-3 text-[gray]'>
              <Link to='/homem'>HOMEM</Link>
              <Link to='/mulher'>MULHER</Link>
              <Link to='/promocao' className='text-[red]'>PROMOS</Link>
            </div>
    </div>
  )
}

export default Categoria