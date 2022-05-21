import React from 'react'
import Tool from './Tool/Tool'

const Tools = () => {
  return (
    <div className='container mx-auto '>
        <h3 className='my-10 text-center text-secondary font-bold text-3xl'>Our manufacture tools</h3>
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-8'>
            <Tool/>
            <Tool/>
            <Tool/>
            <Tool/>
            <Tool/>
            <Tool/>
        </div>
    </div>
  )
}

export default Tools