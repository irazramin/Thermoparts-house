import React, { useEffect, useState } from 'react';
import Loading from '../../../Shared/Loading';
import Tool from './Tool/Tool';

const Tools = () => {
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://thermopartshouse.herokuapp.com/tools`)
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setIsLoading(false)
      });
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className='container mx-auto mb-6'>
      <h3 className='my-10 text-3xl text-gray-900 text-center mb-6 font-semibold uppercase'>
        Our <span className='text-accent'>manufacture tools</span>
      </h3>
      <div className='grid grid-cols-1 lg:grid-cols-2  gap-8'>
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
