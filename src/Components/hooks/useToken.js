import { useEffect, useState } from 'react';

const useToken = (user) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if(user){
        const email = user?.user?.email;
        const currentUser = {
          email,
        };
    
    fetch(`http://localhost:5000/user/${email}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
            setToken(data?.accessToken);
            localStorage.setItem("accessToken",data?.accessToken)
      });
    }
  }, [user,setToken]);

  return [token];
};

export default useToken;
