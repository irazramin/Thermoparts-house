import React from 'react';
import { toast } from 'react-toastify';

const PlaceOrder = ({
  user,
  tool,
  inputQuantity,
}) => {
  const orderPlace = (e) => {
    e.preventDefault();
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
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({ available }),
          })
            .then((res) => res.json())
            .then((data) => {

            });
        }
      });
  };
  return (
    <div className=' text-gray-900 w-full'>
      <div className='bg-white p-10 mb-5'>
        <h2 className='font-bold text-xl uppercase'>Order Details </h2>
        <div className='mt-5'>
          <h4 className='flex justify-between mb-3'>
            <span> Name :</span>{' '}
            <span className='font-medium text-base'>{tool.name}</span>
          </h4>
          <h4 className='flex justify-between mb-3'>
            <span>Total Price :</span>
            <span className='font-medium text-base'>
              ${tool.price * parseInt(inputQuantity)}
            </span>
          </h4>
          <h4 className='flex justify-between mb-3'>
            <span> Quantity :</span>{' '}
            <span className='font-medium text-base'>{inputQuantity} Piece</span>
          </h4>
        </div>
      </div>
      <div className='bg-white p-10'>
        <form onSubmit={orderPlace} className='mt-10'>
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

          <div className='text-right mt-10'>
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
  );
};

export default PlaceOrder