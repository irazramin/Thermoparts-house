import React from 'react';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const handleSubmitProduct = (e) => {
    e.preventDefault();
    const name = e.target.partsName.value;
    const price = e.target.price.value;
    const img = e.target.img.value;
    const available = e.target.available.value;
    const moq = e.target.moq.value;
    const desc = e.target.desc.value;

    const addedProduct = {
      name,
      price:parseInt(price),
      img,
      available:parseInt(available),
      moq:parseInt(moq),
      desc
    }

    fetch(`https://thermopartshouse.herokuapp.com/tools`, {
      method: 'POST',
      headers: {
      'content-type':'application/json'
      },
      body:JSON.stringify(addedProduct)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          toast.success('Product successfully added')
          e.target.reset();
        }
      });
  };
  return (
    <div className='lg:w-[70%] md:w-[80%] w-[90%] mx-auto my-10'>
      <div className=' justify-center'>
        <div className='block p-6 rounded-lg shadow-lg bg-white '>
          <h5 className='text-gray-900 text-xl leading-tight font-medium mb-2'>
            Add a product
          </h5>
          <form onSubmit={handleSubmitProduct} className='mt-5'>
            <div className='grid grid-cols-2 gap-5'>
              <input
                type='text'
                placeholder='Product name'
                name='partsName'
                
                className='
                        w-full
                        rounded-md
                        border
                        border-gray-300
                        py-3.5
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        '
              />
              <input
                type='number'
                placeholder='Price per piece'
                name='price'
                className='
                        w-full
                        rounded-md
                        border
                        
                        border-gray-300
                        py-3.5
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        '
              />
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <input
                type='number'
                placeholder='Minimum order quantity'
                name='moq'
                
                className='
                        w-full
                        rounded-md
                        border
                        
                        border-gray-300
                        py-3.5
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        '
              />
              <input
                type='number'
                placeholder='Available quantity'
                name='available'
                className='
                        w-full
                        rounded-md
                        border
                        
                        border-gray-300
                        py-3.5
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        '
              />
            </div>
            <input
              type='text'
              placeholder='Image url'
              name='img'
              className='
                        w-full
                        rounded-md
                        border
                        
                        border-gray-300
                        py-3.5
                        px-5
                        bg-[#FssCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        mb-5
                        '
            />
            <textarea
              className='w-full rounded-md border text-gray-900
              border-gray-300 py-3.5 px-5 bg-[#FssCFDFE] text-base text-body-color placeholder-[#ACB6BE] outline-none focus-visible:shadow-none focus:border-primary mb-5'
              name='desc'
              id=''
              cols='20'
              rows='6'
              placeholder='product description'
            ></textarea>

            <div className='text-right'>
              <button
                type='submit'
                className=' bg-primary text-white btn-sm btn border-0'
              >
                Add product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
