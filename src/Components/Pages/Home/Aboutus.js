import React from 'react';

const Aboutus = () => {
  return (
    <div className='container mx-auto my-20 bg-white'>
      <h2 className='text-3xl text-gray-900 text-center mb-6 font-semibold uppercase'>
        About
        <span className='text-accent'> Us</span>
      </h2>
      <div className='hero text-gray-900 lg:w-[90%] mx-auto'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <img
            className='object-cover w-[240px] h-[400px] rounded-lg mx-auto '
            src='https://images.unsplash.com/photo-1632914146475-bfe6fa6b2a12?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
            alt=''
          />
          <div>
            <h1 className='text-5xl font-bold'>Our Capabilities</h1>
            <p className='py-6'>
              We are always aiming to exceed customer expectations and provide
              creative solutions to meet any kind of demand. Keeping up with the
              emerging trends, market needs and combining them with our
              technical and creative expertise…
            </p>
            <button className='btn btn-primary btn-sm'>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
