import React, { useState } from 'react';

const ManageProductRow = ({ product,idx,setIsModalOpen,setProductId }) => {
     
    const {_id, name, moq, available,price} = product
     const handleDeleteProduct = (id) => {
       setProductId(id);
       setIsModalOpen(true)
     };
  return (
    <tr className='text-gray-800 text-center'>
      <th>{idx + 1}</th>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{available}</td>
      <td>{moq}</td>
      <td>{price}</td>
      <td>
        <button
          onClick={() => handleDeleteProduct(_id)}
          className='relative bottom-0 ml-auto modal-button inline-block px-6 py-2 border-[1px] border-white  font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out text-white bg-red-500'
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageProductRow