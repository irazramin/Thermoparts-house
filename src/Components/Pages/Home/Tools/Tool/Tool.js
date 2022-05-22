import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id,img,name,desc,moq,available,price} = tool;
    const navigate = useNavigate()
  return (
    <>
      <div class='card card-side text-gray-900 shadow-xl flex flex-col md:flex-row border-[1px]  border-primary'>
        <figure>
          <img className='w-[200px] h-[200px] p-10' src={img} alt='Movie' />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>{name}</h2>
          <p>{desc}</p>
          <p>
            price :{' '}
            <span className='font-semibold'>
              <span className='font-bold text-primary'>${price} /piece</span>
            </span>
          </p>
          <div className='bg-secondary px-4 justify-between py-[2px] text-white  flex items-center rounded mt-3'>
            <p className=' '>MOQ : {moq}</p>
            <p>Available quantity : {available}</p>
          </div>
          <div class='card-actions justify-end mt-3'>
            <button
              onClick={() => navigate(`purchase/${_id}`)}
              class='btn btn-primary btn-sm  text-white'
            >
              purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tool;
