import React from 'react';
import ReactStars from 'react-rating-stars-component';
import user from '../../../../assests/user.png';
const Review = () => {
  const review = `We love our casper mattress - super simple to put together. The
            customer service was amazing and so was delivery. We bought a super
            expensive fancy mattress a year ago and ended up hating it, this
            mattress has been absolutely wonderful. We have both had the best
            nights sleep we have had in a very long time.`;
  return (
    <div class='flex justify-center'>
      <div class='block p-6 rounded-lg shadow-lg bg-white max-w-sm'>
        <h5 class='text-gray-900 leading-tight mb-2'>
          <div className='flex items-center'>
            <img className='w-10 h-10' src={user} alt='' />
            <div className='ml-5'>
              <h3>{'Morgan'}</h3>
              <small>{'New Boston, New Hampshire'}</small>
            </div>
          </div>
        </h5>
        <div>
          <ReactStars
            filledIcon='2'
            value={4}
            edit={false}
            count={5}
            size={24}
            activeColor='#83c914'
            color='#777'
          />
        </div>
        <p class='text-gray-700 text-base mb-2'>
          {review.length > 100 ? review.slice(0, 100) : review}
        </p>
      </div>
    </div>
  );
};

export default Review;
