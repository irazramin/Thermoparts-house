import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../../Shared/Loading';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const {
      data: allOrder,
      isLoading,
      refetch,
    } = useQuery('allorders', () =>
      fetch(`http://localhost:5000/admin/tools/allproducts`, {
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
    <div className='mt-10 relative'>
      {allOrder.length === 0 ? (
        <>
          <h2 className='text-center flex items-center justify-center h-screen text-4xl -mt-28'>
            You don't have any order!
          </h2>
        </>
      ) : (
        <div className='overflow-x-auto'>
          <table className='table w-full'>
            <thead>
              <tr className='text-center'>
                <th></th>
                <th>ID</th>
                <th>Name</th>
                <th>Available quantity</th>
                <th>Minimum quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allOrder.map((order, idx) => (
                <ManageProductRow order={order} idx={idx} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ManageProducts