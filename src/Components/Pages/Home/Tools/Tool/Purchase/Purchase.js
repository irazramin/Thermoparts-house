import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import Loading from '../../../../../Shared/Loading';

const Purchase = () => {
    const {id} = useParams();
    console.log(id)
      const {
        data: tool,
        isLoading,
        refetch,
      } = useQuery('services', () =>
        fetch(`http://localhost:5000/tools/${id}`).then((res) => res.json())
      );

      if(isLoading){
          return <Loading />
      }
  return (
    <div>Purchase : {tool.name}</div>
  )
}

export default Purchase