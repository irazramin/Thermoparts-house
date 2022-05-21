import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../../../Shared/Loading';
import Tool from './Tool/Tool'

const Tools = () => {
       const {
         data: tools,
         isLoading,
         refetch,
       } = useQuery('services', () =>
         fetch(`http://localhost:5000/tools`).then((res) => res.json())
       );

    if(isLoading){
        return <Loading></Loading>
    }
  return (
    <div className='container mx-auto '>
        <h3 className='my-10 text-center text-secondary font-bold text-3xl'>Our manufacture tools</h3>
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-8'>
          {
              tools.map(tool => <Tool key={tool._id} tool={tool}/>)
          }
        </div>
    </div>
  )
}

export default Tools