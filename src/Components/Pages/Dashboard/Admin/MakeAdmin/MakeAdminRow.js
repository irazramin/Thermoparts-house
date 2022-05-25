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
          {role !=='admin' ? <><button onClick={handleMakeAdmin} className='btn btn-xs btn-primary text-white'>Make admin</button></> : ''}
      </td>
    </tr>
  );
};

export default MakeAdminRow;
