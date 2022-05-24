import { useEffect, useState } from 'react';

const useAdmin = (email) => {
  const [isAdmin,setIsAdmin] = useState(false);

  useEffect(() =>{
      fetch(`https://thermopartshouse.herokuapp.com/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.admin);
        });
  },[email])

  return [isAdmin]
}

export default useAdmin