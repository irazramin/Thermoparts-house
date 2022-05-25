import React from 'react';

const MakeAdminRow = ({user,idx,refetch}) => {
    const {_id,email,role} = user;

    const handleMakeAdmin = () =>{
        fetch(
          `https://thermopartshouse.herokuapp.com/admin/users/makeadmin/${_id}`,
          {
            method: 'PUT',
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              refetch();
            }
          });
    }
  return (
    <tr className='text-gray-800 text-center'>
      <th>{idx + 1}</th>
      <td>{_id}</td>
      <td>{email}</td>
      <td>{role ? role : 'user'}</td>

      <td>
        {role !== 'admin' ? (
          <>
            <button
              onClick={handleMakeAdmin}
              className='inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'
            >
              Make admin
            </button>
          </>
        ) : (
          ''
        )}
      </td>
    </tr>
  );
};

export default MakeAdminRow;
