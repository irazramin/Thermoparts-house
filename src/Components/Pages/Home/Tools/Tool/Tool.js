import React from 'react';

const Tool = () => {
    // https://tiimg.tistatic.com/fp/1/007/406/220-and-440-voltage-heater-panel-for-ductable-and-air-handling-unit-222-w410.jpg
  return (
    <>
      <div class='card card-side text-gray-900 shadow-xl flex flex-col md:flex-row border-[1px]  border-primary'>
        <figure>
          <img
            className='w-[200px] h-[200px] p-10'
            src='https://tiimg.tistatic.com/fp/1/007/406/220-and-440-voltage-heater-panel-for-ductable-and-air-handling-unit-222-w410.jpg'
            alt='Movie'
          />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>Silver 220 And 440 Voltage Heater Pane</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, amet. Eum, ipsa! Eius sapiente ullam, deserunt corporis iusto nesciunt alias!</p>
          <p>
            price : <span className='font-semibold'>$50/per piece</span>
          </p>
          <div className='bg-secondary px-4 justify-between py-[2px] text-white  flex items-center rounded'>
            <p className=' '>MOQ : 20</p>
            <p>Available quantity : 1000</p>
          </div>
          <div class='card-actions justify-end'>
            <button class='btn btn-primary btn-sm  text-white'>purchase</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tool;
