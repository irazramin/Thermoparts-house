import React from 'react';

const Banner = () => {
  return (
    <div class='carousel w-full h-[70vh]'>
      <div id='slide1' class='carousel-item relative w-full'>
        <img
          src='https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470'
          class='object-cover w-full'
        />
        <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide4' class='btn btn-circle'>
            ❮
          </a>
          <a href='#slide2' class='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide2' class='carousel-item relative w-full'>
        <img
          src='https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070'
          class='object-cover w-full'
        />
        <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide1' class='btn btn-circle'>
            ❮
          </a>
          <a href='#slide3' class='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slide3' class='carousel-item relative w-full'>
        <img
          src='https://images.unsplash.com/photo-1589792923962-537704632910?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
          class='object-cover w-full'
        />
        <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <a href='#slide2' class='btn btn-circle'>
            ❮
          </a>
          <a href='#slide1' class='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
