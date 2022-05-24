import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = ({ order, idx, refetch }) => {
  const { partsName, name, paid, quantity, totalAmount, transactionId, _id } =
    order;

    const handleCancelOrder = () => {
    fetch(`http://localhost:5000/order/payment/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Product cancel');
          refetch();
        }
      });
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
            <a
              href='#my-modal-2'
              className='btn-sm btn btn-warning mx-1  text-gray-90'
            >
              Cancel
            </a>

            {/* modal */}
            <div className='modal' id='my-modal-2'>
              <div className='modal-box text-left'>
                <a
                  href='#'
                  className='btn btn-sm btn-circle absolute right-2 top-2'
                >
                  ✕
                </a>
                <h3 className='font-bold text-lg'>Warning</h3>
                <p className='py-4'>Are you sure ?</p>
                <div className='modal-action'>
                  
                  <a href='#' onClick={handleCancelOrder} className='btn'>
                    Cancel
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </td>
    </tr>
  );
};

export default Order;
