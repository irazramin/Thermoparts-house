import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({ order, idx, setIsModalOpen, setProductId }) => {
  const { partsName, name, paid, quantity, totalAmount, transactionId, _id } =
    order;

  const handleCancelOrder = (id) => {
     setProductId(id);
     setIsModalOpen(true);
  };
  return (
    <tr className='text-gray-800 text-center'>
      <th>{idx + 1}</th>
      <td>{name}</td>
      <td>{partsName}</td>
      <td>{quantity}</td>
      <td>{totalAmount}</td>
      <td>{transactionId ? transactionId : 'N/A'}</td>
      <td>
        {paid ? (
          <>
            <p className=' badge badge-success'>Paid</p>
          </>
        ) : (
          <>
            <Link to={`/dashboard/payment/${_id}`}>
              <button className='btn-sm btn btn-secondary mx-1 text-gray-90'>
                Pay
              </button>
            </Link>
            <button
              onClick={() => handleCancelOrder(_id)}
              className='btn btn-sm btn-primary text-white'
            >
              Cancel
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Order;
