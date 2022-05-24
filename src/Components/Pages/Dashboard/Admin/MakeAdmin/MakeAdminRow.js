import React from 'react';

const MakeAdminRow = ({user,idx}) => {
    const {_id,email,role} = user
  return (
    <tr className='text-gray-800 text-center'>
      <th>{idx + 1}</th>
      <td>{_id}</td>
      <td>{email}</td>
      <td>{role ? role : 'user'}</td>
      
      <td>
          {role !=='admin' ? <><button className='btn btn-xs btn-primary text-white'>Make admin</button></> : ''}
      </td>
    </tr>
  );
};

export default MakeAdminRow;
