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
      <td><button onClick={() => handleDeleteProduct(_id)} className='btn btn-sm btn-primary text-white'>Delete</button></td>
    </tr>
  );
};

export default ManageProductRow