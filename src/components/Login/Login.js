import React from 'react';

const Login = () => {
  return (
    <div className='p-40 h-screen'>
        <div className='flex flex-col items-center justify-center '>
            <h1 className='text-3xl text-[gray] font-light'>Entrar</h1>
            <p className='truncate text-sm my-7 text-[gray]'>Digite seu e-mail e senha</p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-3'>
            <input type='email' placeholder='Email' className='border p-2' />
            <input type='password' placeholder='Senha' className='border p-2 ' />
        </div>
        <div className='flex flex-col items-center justify-center mt-5'>
            <button className='bg-black text-white py-2 rounded-md px-40 font-medium hover:text-black hover:bg-white duration-500 border border-black'>Entrar</button>
            <p className='truncate mt-7 text-[gray] text-sm'>Ainda não tem uma conta? <a href='vazio' className='font-bold'>Crie uma</a></p>
        </div>
    </div>
  )
}

export default Login