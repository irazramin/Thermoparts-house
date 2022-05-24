import { useEffect, useState } from 'react';

const useFetchTool = (id) => {
      const [tool, setTool] = useState({});
     useEffect(() => {
       fetch(`https://thermopartshouse.herokuapp.com/tools/${id}`)
         .then((res) => res.json())
         .then((data) => {
           setTool(data);
         });
     }, [setTool,id]);

     return[tool]
}

export default useFetchTool