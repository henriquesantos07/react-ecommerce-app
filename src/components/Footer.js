import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='flex flex-col mx-10  text-sm'>
            <h1 className='mt-7 text-[gray]'>Nossa missão</h1>
            <p className='mt-7 text-[white]'>A Insider nasceu para facilitar a vidas das pessoas por meio de roupas funcionais e tecnológicas.</p>
        </div>
        <div className='flex flex-col mx-10  text-sm'>
            <h1 className='mt-7 text-[gray] mb-7'>Dúvidas</h1>
            <div className='text-[white] space-y-3'>    
                <p>Política de Privacidade e Política de Dados</p>
                <p>Termos e Condições de Uso da Insider</p>
                <p>Mapa do Site</p>
                <p>Ajuda/FAQ</p>
                <p>Trocas e Devoluções</p>
                <p>Política de Reembolso</p>
                <p>Política de Frete</p>
                <p>Termos de Serviço</p>
            </div>
        </div>
        <div className='flex flex-col mx-10  text-sm'>
            <h1 className='mt-7 text-[gray] mb-7'>Sobre</h1>
            <div className='text-[white] space-y-3'>    
                <p>Blog</p>
                <p>Crie a sua loja Insider</p>
                <p>Compre pra sua empresa</p>
                <p>Insider Store é confiável</p>
                <p>Nossa Tecnologia</p>
                <p>Nosso DNA</p>
                <p>Reviews</p>
                <p>Sustentabilidade</p>
                <p>Carreiras</p>
            </div>
        </div>
        <div className='flex flex-col mx-10  text-sm'>
            <h1 className='mt-7 text-[gray]'>Contato</h1>
            <p className='mt-7 text-[white]'>Whatsapp</p>
        </div>
        <div className='flex items-center justify-center mx-10 text-sm md:justify-start'>
            <h1 className='mt-7 text-[gray]'>© Insider</h1>
        </div>
    </div>
  )
}

export default Footer