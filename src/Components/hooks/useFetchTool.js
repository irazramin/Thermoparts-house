import React, { useEffect, useState } from 'react'

const useFetchTool = (id) => {
      const [tool, setTool] = useState({});
     useEffect(() => {
       fetch(`http://localhost:5000/tools/${id}`)
         .then((res) => res.json())
         .then((data) => {
           setTool(data);
         });
     }, [setTool,id]);

     return[tool]
}

export default useFetchTool