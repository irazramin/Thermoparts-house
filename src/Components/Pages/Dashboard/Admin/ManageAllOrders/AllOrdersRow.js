import React from 'react';
import { toast } from 'react-toastify';

const AllOrdersRow = ({ order, idx, setIsModalOpen, setProductId,refetch }) => {
  const { partsName, name, paid, quantity, totalAmount, transactionId, _id,shipment } =
    order;

   const handleCancelOrder = (id) => {
     setProductId(id);
     setIsModalOpen(true);
   };

   const handleShipment = (id) =>{
     fetch(`https://thermopartshouse.herokuapp.com/admin/order/allorder/shipment/${id}`, {
       method: 'PUT',
       headers: {
         'content-type': 'application/json',
         authorization: `bearer ${localStorage.getItem('accessToken')}`,
       },
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.acknowledged) {
           toast.success('Order shipped');
           refetch();
         }
       });
   }
  return (
    <tr className='text-gray-800 text-center'>
      <th>{idx + 1}</th>
      <td>{_id.slice(0, 5) + '...'}</td>
      <td>{name}</td>
      <td className='text-left'>{partsName.slice(0, 10)}</td>
      <td>{quantity}</td>
      <td>{totalAmount}</td>
      <td>{transactionId ? transactionId : 'N/A'}</td>
      <td>
        {paid ? (
          <>
            {shipment ? (
              <>
                <h2 className='text-sm font-medium italic text-green-500'>
                  shipped
                </h2>
              </>
            ) : (
              <>
                <div className='flex justify-between items-center'>
                  <h2 className='text-base font-medium italic  mx-1 text-red-500'>
                    Pending
                  </h2>

                  <button
                    onClick={() => handleShipment(_id)}
                    className='btn btn-sm btn-primary mx-1 text-white'
                  >
                    Shipped
                  </button>
                </div>
              </>
            )}
          </>
        ) : (
          'N/A'
        )}
      </td>
      <td className='text-center'>
        <>
          {paid ? (
            <>
              <span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded-full'>
                Paid
              </span>
            </>
          ) : (
            <>
              <div className='flex justify-evenly items-center'>
                <span className='text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-600 text-white rounded-full'>
                  Unpaid
                </span>
                <button
                  onClick={() => handleCancelOrder(_id)}
                  className='inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out'
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </>
      </td>
      {/* <td className='text-right'>
      {
        !paid ?
      
        :
        ''
      }
      </td> */}
    </tr>
  );
};

export default AllOrdersRow;
