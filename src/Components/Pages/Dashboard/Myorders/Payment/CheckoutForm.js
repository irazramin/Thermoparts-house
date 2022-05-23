import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = ({ order }) => {
  const elements = useElements();
  const stripe = useStripe();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const { totalAmount, partsName, email } = order;

  useEffect(() => {
    fetch(`http://localhost:5000/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({ totalAmount }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
          console.log(data);
        }
      });
  }, [totalAmount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error?.message);
    } else {
      setCardError(' ');
    }
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: partsName,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      console.log(intentError)
    } else {
      toast.success('Payment successful');
      console.log(paymentIntent?.id);
      const transactionId = paymentIntent?.id;
      const payment = {
        transactionId: transactionId,
        paid: true,
      };
      fetch(`http://localhost:5000/order/payment/${order._id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .the((data) => {
          console.log(data);
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {cardError && <p className='text-warning text-sm mt-10'>{cardError}</p>}
      <button
        type='submit'
        className=' btn bg-primary mt-5 mx-auto flex justify-center btn-sm'
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
