import React, { useEffect, useState } from 'react';
import Review from './Review';


const Reviews = () => {
  const [reviews,setReviews] = useState([]);
  
  useEffect(() =>{
   fetch(`https://thermopartshouse.herokuapp.com/review`)
     .then((res) => res.json())
     .then((data) => {
       setReviews(data)
     });
  },[])
   return (
    <div className='container mx-auto my-10 bg-white p-10'>
      <h2 className='text-3xl text-gray-900 text-center mb-6 font-semibold uppercase'>What our <span className='text-accent'>Customers are saying</span></h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
     {reviews && reviews?.map(review => <Review key={review._id} review={review} ></Review>)}
      </div>
    </div>
  );
}

export default Reviews