import React from 'react';
import { toast } from 'react-toastify';

const Modal = ({ user, tool, inputQuantity, isModalOpen, setIsModalOpen }) => {
  const orderPlace = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const totalAmount = tool.price * parseInt(inputQuantity);
    const order = {
      email: user?.email,
      name: user?.displayName,
      phone: phone,
      address: address,
      partsName: tool?.name,
      quantity: inputQuantity,
      totalAmount: totalAmount,
      paid: false,
    };

    fetch(`https://thermopartshouse.herokuapp.com/order`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result.acknowledged) {
          toast.success('Purchase successfully');
          const available = tool.available - parseInt(inputQuantity);
          fetch(`https://thermopartshouse.herokuapp.com/tools/${tool._id}`, {
            method: 'PATCH',
            headers:{
              "Content-type" :"application/json",
            },
            body:JSON.stringify({available})
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
            });
        }
      });
  };
  return (
    <>
      <div
        id='authentication-modal'
        tabindex='-1'
        aria-hidden='true'
        class={`${
          isModalOpen ? 'block' : 'hidden'
        } flex  justify-center items-center shadow-2xl overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}
      >
        <div class='relative p-4 w-full max-w-md h-full md:h-auto'>
          <div class='relative bg-white text-gray-900 rounded-lg shadow '>
            <button
              onClick={() => setIsModalOpen(false)}
              type='button'
              class='absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 '
              data-modal-toggle='authentication-modal'
            >
              <svg
                class='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
            <div className='p-5 mt-2'>
              <h2 className='mt-3'>
                You have selected <span></span>
                <span className='text-accent'>
                  {inputQuantity} {tool.name}
                </span>{' '}
                . Total amount{' '}
                <span className='font-bold text-accent'>
                  ${tool.price * inputQuantity}
                </span>
              </h2>
              <form onSubmit={orderPlace} className='mt-10 mx-10'>
                <div className='mb-5'>
                  <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={user?.displayName}
                    disabled
                    className='
                      w-full
                      rounded-md
                      border
                      bordder-[#E9EDF4]
                      py-2
                      px-5
                      bg-[#FssCFDFE]
                      text-base text-body-color
                      placeholder-[#ACB6BE]
                      outline-none
                      focus-visible:shadow-none
                      focus:border-primary
                      '
                  />
                </div>
                <div className='mb-5'>
                  <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={user?.email}
                    disabled
                    className='
                      w-full
                      rounded-md
                      border
                      bordder-[#E9EDF4]
                      py-2
                      px-5
                      bg-[#FssCFDFE]
                      text-base text-body-color
                      placeholder-[#ACB6BE]
                      outline-none
                      focus-visible:shadow-none
                      focus:border-primary
                      '
                  />
                </div>
                <div className='mb-5'>
                  <input
                    type='number'
                    placeholder='Phone'
                    name='phone'
                    className='
                      w-full
                      rounded-md
                      border
                      bordder-[#E9EDF4]
                      py-2
                      px-5
                      bg-[#FssCFDFE]
                      text-base text-body-color
                      placeholder-[#ACB6BE]
                      outline-none
                      focus-visible:shadow-none
                      focus:border-primary
                      '
                  />
                </div>
                <div className='mb-5'>
                  <input
                    type='text'
                    placeholder='Address'
                    name='address'
                    className='
                      w-full
                      rounded-md
                      border
                   bordder-[#E9EDF4]
                      py-2
                      px-5
                      bg-[#FssCFDFE]
                      text-base text-body-color
                      placeholder-[#ACB6BE]
                      outline-none
                      focus-visible:shadow-none
                      focus:border-primary
                      '
                  />
                </div>

                <div className='text-center'>
                  <input
                    type='submit'
                    value='Confirm Order'
                    htmlFor='my-modal-3'
                    className='inline-block px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out cursor-pointer'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
