import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteItemModal from '../../../../Shared/DeleteItemModal';
import Loading from '../../../../Shared/Loading';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
 const [productId, setProductId] = useState('');
 const [isModalOpen, setIsModalOpen] = useState(false);
 const url = `https://thermopartshouse.herokuapp.com/admin/product/allproduct/`;
    const {
      data: product,
      isLoading,
      refetch,
    } = useQuery('products', () =>
      fetch(`https://thermopartshouse.herokuapp.com/admin/tools/allproducts`, {
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
      {product.length === 0 ? (
        <>
          <h2 className='text-center flex items-center justify-center h-screen text-4xl -mt-28'>
            You don't have any order!
          </h2>
        </>
      ) : (
        <>
        <h2 className='my-5 text-2xl font-bold text-gray-900'>All products</h2>
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
                {product.map((product, idx) => (
                  <ManageProductRow
                    product={product}
                    idx={idx}
                    setProductId={setProductId}
                    setIsModalOpen={setIsModalOpen}
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
}

export default ManageProducts