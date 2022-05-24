import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(
  'pk_test_51L1P9mHwvbsu8y97vtqMVEoofGGlVQyrb31gh5pLi1kOzWjWJedhdmktnG8PwaAoc1NrezMAusuNKqwuDbfZtY7k006S4R21Td'
);
const Payment = () => {

  const { id } = useParams();
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery(['order', id], () =>
    fetch(`https://thermopartshouse.herokuapp.com/order/payment/${id}`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(order);
  return (
    <div className='w-full mt-10'>
      <div className=''>
        <div className='md:max-w-xl mx-auto rounded-lg bg-white shadow-lg'>
          <div className=' flex flex-col-reverse'>
            <div className='mt-5 px-10 pb-6'>
              <Elements stripe={stripePromise}>
                <CheckoutForm order={order}/>
              </Elements>
            </div>
            <div className='p-6 flex flex-col justify-start'>
              <h5 className='text-gray-900 text-xl font-medium mb-2'>
                Payment for{' '}
                <span className='text-primary'>{order.partsName}</span>
              </h5>
              <div className='px-10'>
                <div className='flex items-center justify-between '>
                  <div>
                    <p className='text-lg font-medium text-gray-900'>
                      Quantity :
                    </p>
                  </div>
                  <div>
                    <p className='text-lg font-medium text-gray-900'>
                      {order.quantity} Piece
                    </p>
                  </div>
                </div>
                <div className='flex items-center justify-between mt-3'>
                  <div>
                    <p className='text-lg font-medium text-gray-900'>
                      Total amount :
                    </p>
                  </div>
                  <div>
                    <p className='text-lg font-medium text-gray-900'>
                      ${order.totalAmount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
