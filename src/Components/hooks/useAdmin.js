import { useEffect, useState } from 'react';

const useAdmin = (email) => {
  const [isAdmin,setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() =>{
      fetch(`https://thermopartshouse.herokuapp.com/admin/${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.admin);
          setAdminLoading(false);
        });
  },[email])

  return [isAdmin,adminLoading]
}

export default useAdmin