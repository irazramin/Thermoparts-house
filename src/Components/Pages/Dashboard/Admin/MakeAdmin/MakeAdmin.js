import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../../Shared/Loading';
import MakeAdminRow from './MakeAdminRow';

const MakeAdmin = () => {

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('adminUser', () =>
    fetch(`http://localhost:5000/admin/users/details`, {
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
     <div className='mt-10 w-[90%] mx-auto'>
       
          <table className='table w-full'>
            <thead>
              <tr className='text-center'>
                <th></th>
                <th>ID</th>
                <th>Email</th>
                <th>role</th>
                <th>Action</th>
               
              </tr>
            </thead>
            <tbody>
              {users.map((user,idx) => <MakeAdminRow key={user._id} user={user} idx={idx} refetch={refetch} />)}
            </tbody>
          </table>
        </div>
  )
}

export default MakeAdmin