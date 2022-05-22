import React from 'react';
import CountUp, { useCountUp } from 'react-countup';

const Business = () => {
      useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });
  return (
    <div className='my-20'>
      <div class='bg-accent'>
        <div class='pb-20'>
          <div class='mx-auto bg-gradient-to-l from-primary to-primary h-96'>
            <div class='mx-auto container w-full flex flex-col justify-center items-center'>
              <div class='flex justify-center items-center flex-col'>
                <div class='mt-20'>
                  <h2 class='lg:text-6xl md:text-5xl text-4xl  text-center mb-3 font-semibold text-white '>
                    About <span className='text-accent'>out Business</span>
                  </h2>
                </div>
                <div class='mt-6 mx-2 md:mx-0 text-center'>
                  <p class='lg:text-lg md:text-base leading-6 text-sm text-white'>
                    5 years, consistent quality and you get results. No matter
                    what
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class='mx-auto container md:-mt-28 -mt-20 flex justify-center items-center'>
            <div class='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6'>
              <div class='flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl'>
                <h2 class='lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800'>
                  <>
                    <div className='content' />
                    <span className='lg:text-5xl'>
                      {<CountUp end={540} enableScrollSpy />}K+
                    </span>
                    <br />
                    <span className='hidden' id='counter' />
                  </>
                </h2>
                <p class='mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600'>
                  Happy Clients
                </p>
              </div>
              <div class='flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl'>
                <h2 class='lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800'>
                  <>
                    <div className='content' />
                    <span className='lg:text-5xl'>
                      {<CountUp end={100} enableScrollSpy />}K+
                    </span>
                    <br />
                    <span className='hidden' id='counter' />
                  </>
                </h2>
                <p class='mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600'>
                  served customers
                </p>
              </div>
              <div class='flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl'>
                <h2 class='lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800'>
                  <>
                    <div className='content' />
                    <span className='lg:text-5xl'>
                      {<CountUp end={50} enableScrollSpy />}M+
                    </span>
                    <br />
                    <span className='hidden' id='counter' />
                  </>
                </h2>
                <p class='mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600'>
                  Annual revenue
                </p>
              </div>
              <div class='flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl'>
                <h2 class='lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-gray-800'>
                  <>
                    <div className='content' />
                    <span className='lg:text-5xl'>
                      {<CountUp end={70} enableScrollSpy />}K+
                    </span>
                    <br />
                    <span className='hidden' id='counter' />
                  </>
                </h2>
                <p class='mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600'>
                  Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business