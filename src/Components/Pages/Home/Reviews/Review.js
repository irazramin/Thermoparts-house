import React from 'react';
import ReactStars from 'react-rating-stars-component';
import user from '../../../../assests/user.png';
const Review = ({review}) => {

  const { userName, city, comment, rating } = review;
  return (
    <div class='flex justify-center'>
      <div class='block p-6 rounded-lg shadow-lg bg-white max-w-sm w-96'>
        <h5 class='text-gray-900 leading-tight mb-2'>
          <div className='flex items-center'>
            <img className='w-10 h-10' src={user} alt='' />
            <div className='ml-5'>
              <h3>{userName}</h3>
              <small>{city}</small>
            </div>
          </div>
        </h5>
        <div>
          <ReactStars
            filledIcon='2'
            value={rating}
            edit={false}
            count={5}
            size={24}
            activeColor='#83c914'
            color='#777'
          />
        </div>
        <p class='text-gray-700 text-base mb-2'>
          {comment.length > 100 ? review.slice(0, 100) : comment}
        </p>
      </div>
    </div>
  );
};

export default Review;
