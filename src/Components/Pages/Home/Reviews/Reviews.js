import React from 'react';
import Review from './Review';


const Reviews = () => {
 
  return (
    <div className='container mx-auto my-10'>
      <h2 className='text-3xl text-gray-900 text-center mb-6 font-semibold uppercase'>What our <span className='text-accent'>Customers are saying</span></h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
}

export default Reviews