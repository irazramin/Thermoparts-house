import { faMinus, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../../../Firebase.init';
import Loading from '../../../../../Shared/Loading';
import Modal from './Modal';

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [tool, setTool] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/tools/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTool(data);
        setQuantity(data.moq);
        console.log(data);
        setIsLoading(false);
      });
  }, [id, setTool]);

  if (isLoading) {
    return <Loading />;
  }

  const handleIncrease = () => {
    
    if (quantity <= tool.available) {
      setQuantity(quantity + 1);
    } else {
      toast.error(`You can't increase quantity more than available quantity`);
    }
  };
  console.log(tool.moq);
  const handleDecrease = () => {
    if (quantity <= tool.moq) {
      toast.error(
        `You can't decrease quantity more than Minimum order quantity`
      );
    } else {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className='w-[90%] lg:w-[70%] mx-auto my-20 text-white'>
      <div className='grid py-10 lg:px-8 px-4 lg:grid-cols-3 bg-gradient-to-r bg-secondary to-primary gap-5 rounded-3xl '>
        <div className='col-span-1'>
          <img
            className='lg:w-[400px] lg:h-[400px] md:h-[200px] w-[300px]  h-[150px] rounded-3xl mx-auto object-cover  hover:shadow-xl shadow-primary duration-500 hover:scale-105'
            src={tool?.img}
            alt=''
          />
        </div>
        <div className='col-span-2 lg:px-10 md:px-8 px-3'>
          <h2 className='text-3xl font-semibold mt-5 lg:mt-0 '>{tool.name}</h2>
          <p className='mt-4 whitespace-pre-wrap'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            vitae dolore aliquid ratione! Libero nihil deserunt voluptates.
            Dolor, quis natus.
          </p>

          <h3 className='text-xl font-bold mt-6'>
            Price : ${tool.price}/piece
          </h3>
          <div className='lg:mt-10 mt-5  '>
            <div>
              <p>
                Minimum Order Quantity :{' '}
                <span className='font-semibold'> {tool.moq}</span>
              </p>
              <p>
                Available Quantity :
                <span className='font-semibold'> {tool.available}</span>
              </p>
            </div>
            <div className='flex mt-5'>
              <div className='bg-white p-2 flex items-center rounded-xl justify-start'>
                <button
                  onClick={handleDecrease}
                  className='btn btn-sm btn-outline mx-3'
                >
                  <FontAwesomeIcon
                    icon={faMinus}
                    className='font-bold text-gray-900'
                  />
                </button>
                <p className='text-accent text-base font-extrabold relative w-6 mx-auto text-center'>
                  {quantity === 0 ? setQuantity(tool.moq) : quantity}
                </p>
                <button
                  onClick={handleIncrease}
                  className='btn btn-sm btn-outline mx-3'
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className='font-extrabold text-gray-900'
                  />
                </button>
              </div>
            </div>
          </div>

          <div className='text-right'>
            <label
              onClick={() => setIsModalOpen(true)}
              for='my-modal-3'
              class='relative bottom-0 ml-auto btn btn-outline  text-white  mt-10 -mr-7 modal-button'
            >
              Place Order
            </label>
          </div>
        </div>
      </div>

      <a href='#my-modal-2'>
        <FontAwesomeIcon
          icon={faUser}
          className='font-bold text-gray-900 absolute top-[100px] right-20 text-2xl p-2 text-center border-[1px] border-dashed rounded-full cursor-pointer'
        />
      </a>

      <div class='modal text-black' id='my-modal-2'>
        <div class='modal-box'>
          <h3 class='font-bold text-lg'>User info!</h3>
          <p class='py-4'>Name : {user?.displayName}</p>
          <p class=''>Email : {user?.email}</p>
          <div class='modal-action'>
            <a href='#' class='btn'>
              Yay!
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          user={user}
          tool={tool}
          quantity={quantity}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Purchase;
