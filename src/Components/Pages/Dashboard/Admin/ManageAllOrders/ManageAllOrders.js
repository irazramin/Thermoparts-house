import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteItemModal from '../../../../Shared/DeleteItemModal';
import Loading from '../../../../Shared/Loading';
import AllOrdersRow from '../ManageAllOrders/AllOrdersRow';

const ManageAllOrders = () => {
   const [productId, setProductId] = useState('');
   const [isModalOpen, setIsModalOpen] = useState(false);
   const url = `https://thermopartshouse.herokuapp.com/admin/order/allorder/`;
  const {
    data: allOrder,
    isLoading,
    refetch,
  } = useQuery('allorders', () =>
    fetch(`https://thermopartshouse.herokuapp.com/admin/order/allorder`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className='mt-10 mb-28 relative'>
      {allOrder.length === 0 ? (
        <>
          <h2 className='text-center flex items-center justify-center h-screen text-4xl -mt-28'>
            You don't have any order!
          </h2>
        </>
      ) : (
        <>
          <h2 className='my-10 text-2xl font-bold text-gray-900'>
            All orders
          </h2>
          <div className='overflow-x-auto'>
            <table className='table min-w-full'>
              <thead>
                <tr className='text-center'>
                  <th></th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Transaction Id</th>
                  <th>Shipping Status</th>
                  <th>Payment Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allOrder.map((order, idx) => (
                  <AllOrdersRow
                    order={order}
                    idx={idx}
                    setProductId={setProductId}
                    setIsModalOpen={setIsModalOpen}
                    refetch={refetch}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {isModalOpen ? (
        <DeleteItemModal
          productId={productId}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          url={url}
          refetch={refetch}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default ManageAllOrders;
