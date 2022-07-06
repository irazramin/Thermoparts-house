import React from 'react';

const Banner = () => {
  return (
    <div className='carousel w-full h-[70vh]'>
      <div id='slide1' className='carousel-item relative w-full'>
        <img
          src='https://images.pexels.com/photos/7484157/pexels-photo-7484157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          className='object-cover w-full'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide4' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' className='carousel-item relative w-full'>
        <img
          src='https://images.pexels.com/photos/5759611/pexels-photo-5759611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          className='object-cover w-full'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' className='carousel-item relative w-full'>
        <img
          src='https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          className='object-cover w-full'
        />
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
