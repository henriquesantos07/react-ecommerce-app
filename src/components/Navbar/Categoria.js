import React from 'react'
import logo from '../../assets/logo.png';

const Categoria = () => {
  return (
    <div className='flex gap-x-20'>
           <a href='/' ><img src={logo} alt='logo' className='h-10' href="/" /></a>
            <div className='flex gap-x-10 mt-3 text-[gray]'>
              <a href='/homem'>HOMEM</a>
              <a href='/mulher'>MULHER</a>
              <a href='/promocao' className='text-[red]'>PROMOS</a>
            </div>
    </div>
  )
}

export default Categoria