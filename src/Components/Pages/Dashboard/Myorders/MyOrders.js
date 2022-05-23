import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../Firebase.init';
import Loading from '../../../Shared/Loading';
import Order from './Order';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;
      const {
        data: orders,
        isLoading,
        refetch,
      } = useQuery(['order',email], () => fetch(`http://localhost:5000/order/${email}`).then((res) => res.json()));

      if (isLoading) {
        return <Loading></Loading>;
      }
      console.log(orders)
  return (
    <div className='mt-10'>
      {orders.length === 0 ? (
        <>
          <h2 className='text-center flex items-center justify-center h-screen text-4xl -mt-28'>You don't have any order!</h2>
        </>
      ) : (
        <div class='overflow-x-auto'>
          <table class='table w-full'>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Transaction Id</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order,idx) => (
                <Order key={order._id} order={order} idx={idx} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
