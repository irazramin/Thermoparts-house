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
  const [tool, setTool] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputQuantity,setInputQuantity] = useState()

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/tools/${id}`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTool(data);
        setInputQuantity(data.moq);
        setIsLoading(false);
      });
  }, [id, setTool]);

  if (isLoading) {
    return <Loading />;
  }

  const handleIncrease = () => {
    
    if (parseInt(inputQuantity) < tool.available) {
      setInputQuantity(parseInt(inputQuantity) + 1);
    } else {
      toast.error(`You can't increase quantity more than available quantity`);
    }
  };
  console.log(tool.moq);
  const handleDecrease = () => {
    if (inputQuantity <= tool.moq) {
      toast.error(
        `You can't decrease quantity more than Minimum order quantity`
      );
    } else {
      setInputQuantity(inputQuantity - 1);
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
            <div className='flex mt-5 items-center'>
              <div className='bg-white p-2 flex items-center rounded-xl justify-start '>
                <button
                  onClick={handleDecrease}
                  className='btn btn-sm btn-outline mx-3'
                >
                  <FontAwesomeIcon
                    icon={faMinus}
                    className='font-bold text-gray-900'
                  />
                </button>
                {/* <p className='text-accent text-base font-extrabold relative w-6 mx-auto text-center'>
                  {quantity === 0 ? setQuantity(tool.moq) : quantity}
                </p> */}
                <input
                  type='number'
                  placeholder='First'
                  name='fname'
                  value={inputQuantity === 0 ? tool.moq : inputQuantity}
                  onChange={(e) => setInputQuantity(e.target.value)}
                  className='
                      w-[70px]
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        placeholder:text-xs
                        py-2
                        px-1
                        text-gray-900
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        '
                />
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
            <button
              disabled={inputQuantity < tool.moq}
              onClick={() => setIsModalOpen(true)}
              className='relative bottom-0 ml-auto btn btn-outline  text-white  mt-10 -mr-7 modal-button'
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      <a href='#my-modal-2'>
        <FontAwesomeIcon
          icon={faUser}
          className='font-bold text-gray-900 absolute top-[100px] right-20 text-2xl p-2 text-center border-[1px] border-dashed rounded-full cursor-pointer'
        />
      </a>

      <div className='modal text-black' id='my-modal-2'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>User info!</h3>
          <p className='py-4'>Name : {user?.displayName}</p>
          <p className=''>Email : {user?.email}</p>
          <div className='modal-action'>
            <a href='#' className='btn'>
              Yay!
            </a>
          </div>
        </div>
      </div>

      <Modal
        user={user}
        tool={tool}
        inputQuantity={inputQuantity}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Purchase;
