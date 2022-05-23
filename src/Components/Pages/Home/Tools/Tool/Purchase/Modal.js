import React from 'react';
import { toast } from 'react-toastify';

const Modal = ({ user, tool, quantity, isModalOpen, setIsModalOpen }) => {
  const orderPlace = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const totalAmount = tool.price * quantity;
    const order = {
      email: user?.email,
      name: user?.displayName,
      phone: phone,
      address: address,
      partsName: tool?.name,
      quantity: quantity,
      totalAmount: totalAmount,
      paid: false,
    };

    fetch(`http://localhost:5000/order`, {
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
          const available = tool.available - quantity;
          fetch(`http://localhost:5000/tools/${tool._id}`, {
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
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal text-black'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <h2>
            You have selected <span></span>
            <span className='text-accent'>
              {quantity} {tool.name}
            </span>{' '}
            . Total amount{' '}
            <span className='font-bold text-accent'>
              ${tool.price * quantity}
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
                className='btn btn-sm btn-primary'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
