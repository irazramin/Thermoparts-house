import React from 'react';

const Modal = ({ user, tool, quantity, isModalOpen, setIsModalOpen }) => {
  const orderPlace = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const totalAmount = tool.price * quantity;
    const order = {
      email : user?.email,
      name : user?.displayName,
      phone : phone,
      address : address,
      partsName : tool?.name,
      quantity : quantity,
      totalAmount: totalAmount,
      pain:false,
    }

    fetch(`http://localhost:5000/order`,{
      method:"POST",
      headers:{
        "Content-type" :"application/json",
      },
      body:JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data)
    })

    console.log(order)
  };
  console.log(isModalOpen);
  return (
    <>
      <input type='checkbox' id='my-modal-3' class='modal-toggle' />
      <div class='modal text-black'>
        <div class='modal-box relative'>
          <label
            for='my-modal-3'
            class='btn btn-sm btn-circle absolute right-2 top-2'
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
            <div class='mb-5'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                value={user?.displayName}
                disabled
                class='
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
            <div class='mb-5'>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={user?.email}
                disabled
                class='
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
            <div class='mb-5'>
              <input
                type='number'
                placeholder='Phone'
                name='phone'
                class='
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
            <div class='mb-5'>
              <input
                type='text'
                placeholder='Address'
                name='address'
                class='
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
                for='my-modal-3'
                class='btn btn-sm btn-primary'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;