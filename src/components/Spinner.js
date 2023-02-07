import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Spinner = () => {
  
  
    return (
    <div className='flex items-center justify-center'>
        <AiOutlineLoading3Quarters className='animate-spin h-10 w-10'/>
    </div>
  )
}

export default Spinner