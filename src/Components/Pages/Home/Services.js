import React from 'react';
import circuit from "../../../assests/circuit.png";
import machine from "../../../assests/machine.png";
import pipe from "../../../assests/pipe.png";
const Services = () => {
  return (
    <div className='container mx-auto bg-white px-5 py-10'>
      <h2 className='text-3xl text-gray-900 text-center mb-6 font-semibold uppercase'>
        Our
        <span className='text-accent'> Services</span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full  place-items-center'>
        <div className='flex justify-center text-center'>
          <div className='rounded-lg shadow-lg bg-white max-w-sm'>
            <a href='#!'>
              <img
                src={machine}
                alt='Shoes'
                className='w-[80px] text-white rounded-xl mx-auto'
              />
            </a>
            <div className='p-6'>
              <h5 className='text-gray-900 text-xl font-medium mb-2'>
                Automotive And Manufacturing
              </h5>
              <p className='text-gray-700 text-base mb-4'>
                Professional discipline deals with designing, planning,
                construction of infrastructures.
              </p>
              <button
                type='button'
                className='inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out'
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-center text-center'>
          <div className='rounded-lg shadow-lg bg-white max-w-sm'>
            <a href='#!'>
              <img
                src={pipe}
                alt='Shoes'
                className='w-[80px] text-white rounded-xl mx-auto'
              />
            </a>
            <div className='p-6'>
              <h5 className='text-gray-900 text-xl font-medium mb-2'>
                Build best parts
              </h5>
              <p className='text-gray-700 text-base mb-4'>
                We build machines that set the industry standard for precision
                and durability
              </p>
              <button
                type='button'
                className='inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out'
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-center text-center'>
          <div className='rounded-lg shadow-lg bg-white max-w-sm'>
            <a href='#!'>
              <img
                src={circuit}
                alt='Shoes'
                className='w-[80px] text-white rounded-xl mx-auto'
              />
            </a>
            <div className='p-6'>
              <h5 className='text-gray-900 text-xl font-medium mb-2'>
                Build best parts
              </h5>
              <p className='text-gray-700 text-base mb-4'>
                We build machines that set the industry standard for precision
                and durability
              </p>
              <button
                type='button'
                className='inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out'
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services