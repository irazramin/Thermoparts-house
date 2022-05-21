import React from 'react'
import loader from '../../assests/loader.svg';
const Loading = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <img className='w-20 h-20' src={loader} alt="" />
    </div>
  )
}

export default Loading