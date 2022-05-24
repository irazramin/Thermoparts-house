import React from 'react';
import Footer from '../../Shared/Footer';

const MyPortfolio = () => {
  return (
    <div className='bg-slate-50'>
      <div className='container mx-auto my-20'>
        <div className='grid grid-cols-2 gap-5 place-items-center'>
          <div className='bg-white p-5'>
            <h4 className='text-lg text-gray-900'>Hello</h4>
            <h2 className='text-5xl font-bold text-gray-900'>
              I'm <span className='text-primary'>Iraz</span> Ramin
            </h2>
            <p className='mt-7'>
              This is iraz ramin frontend developer, who works with TML, CSS, UI
              libraries ( Bootstrap5, TailwindCSS), Javascript, ReactJS, NodeJS,
              MongoDB, and ExpressJS with dedication and hardworking looking for a responsible
              position to gain practical experience.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyPortfolio