import React from 'react';
import circuit from "../../../assests/circuit.png";
import machine from "../../../assests/machine.png";
import pipe from "../../../assests/pipe.png";
const Services = () => {
  return (
    <div className='container mx-auto'>
      <h2 className='text-3xl text-gray-900 text-center mb-6 font-semibold uppercase'>
        Our
         <span className='text-accent'> Services</span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full  place-items-center'>
        <div className='card w-full h-full max-h-md max-w-sm shadow text-gray-900 hover:bg-primary hover:text-white duration-700 ease hover:scale-110 '>
          <figure className='px-10 pt-10'>
            <img
              src={machine}
              alt='Shoes'
              className='w-[80px] text-white'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Automotive And Manufacturing</h2>
            <p>
              Professional discipline deals with designing, planning,
              construction of infrastructures.
            </p>
            <div className='card-actions'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='card w-full  max-w-sm shadow text-gray-900 hover:bg-primary hover:text-white duration-700 ease hover:scale-110'>
          <figure className='px-10 pt-10'>
            <img
              src={pipe}
              alt='Shoes'
              className='w-[80px] text-white'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Build best parts</h2>
            <p>
              We build machines that set the industry standard for precision and
              durability
            </p>
            <div className='card-actions'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='card w-full  max-w-sm shadow text-gray-900 hover:bg-primary hover:text-white duration-700 ease hover:scale-110'>
          <figure className='px-10 pt-10'>
            <img
              src={circuit}
              alt='Shoes'
              className='w-[80px] text-white'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions'>
              <button className='btn btn-primary'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services