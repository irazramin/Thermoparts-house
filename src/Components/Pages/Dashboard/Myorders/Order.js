import React from 'react';

const Order = ({ order, idx }) => {
  const { partsName, name, paid, quantity, totalAmount, transectionId } = order;
  return (
    <tr className='text-gray-800'>
      <th>{idx + 1}</th>
      <td>{name}</td>
      <td>{partsName}</td>
      <td>{quantity}</td>
      <td>{totalAmount}</td>
      <td>{transectionId ? transectionId : 'N/A'}</td>
      <td>
        {paid ? (
          <>
            <p className='text-lg'>Paid</p>
          </>
        ) : (
          <>
          <button className='btn-sm btn btn-secondary mx-1 text-gray-90'>Pay</button>
          <button className='btn-sm btn btn-warning mx-1  text-gray-90'>Cancel</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Order;
