import React from 'react';

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
          className='inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out'
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageProductRow