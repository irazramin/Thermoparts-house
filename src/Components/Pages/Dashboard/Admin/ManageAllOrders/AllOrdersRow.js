import React from 'react';
import { toast } from 'react-toastify';

const AllOrdersRow = ({ order, idx, setIsModalOpen, setProductId }) => {
  const { partsName, name, paid, quantity, totalAmount, transactionId, _id,shipment } =
    order;

   const handleCancelOrder = (id) => {
     setProductId(id);
     setIsModalOpen(true);
   };

   const handleShipment = (id) =>{
     fetch(`http://localhost:5000/admin/order/allorder/shipment/${id}`,{
       method:"PUT",
       headers:{
         "content-type":"application/json"
       },
     })
     .then(res => res.json())
     .then(data =>{
       if(data.acknowledge){
         toast.success('Order shipped');
       }
     })
   }
  return (
    <tr className='text-gray-800 text-center'>
      <th>{idx + 1}</th>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{partsName}</td>
      <td>{quantity}</td>
      <td>{totalAmount}</td>
      <td>{transactionId ? transactionId : 'N/A'}</td>
      <td>
        {paid ? (
          <>
            {shipment ? (
              <>
              <h2 className='text-base font-medium italic text-green-500'>Shipped</h2>
              </>
            ) : (
              <button
                onClick={() => handleShipment(_id)}
                className='btn btn-sm btn-primary text-white'
              >
                Pending
              </button>
            )}
          </>
        ) : (
          'N/A'
        )}
      </td>
      <td>
        <>
          {paid ? (
            <>
              <label className='badge badge-lg badge-secondary'>Paid</label>
            </>
          ) : (
            <>
              <label
                onClick={() => console.log(_id)}
                className='badge badge-lg badge-accent mx-1'
              >
                Unpaid
              </label>

              <button
                onClick={() => handleCancelOrder(_id)}
                className='btn btn-sm btn-primary text-white'
              >
                Cancel
              </button>
            </>
          )}
        </>
      </td>
    </tr>
  );
};

export default AllOrdersRow;
