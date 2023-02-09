import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Spinner = () => {
  
  
    return (
    <div className='flex items-center justify-center'>
        <AiOutlineLoading3Quarters className='flex items-center min-h-screen animate-spin h-20 w-20'/>
    </div>
  )
}

export default Spinner