import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../../../Shared/Loading';
const Purchase = () => {
    const {id} = useParams();
    const [tool,setTool] = useState({})
    const [quantity, setQuantity] = useState(0);
     useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
        .then((res) => res.json())
        .then(data => {
          setTool(data)
          setQuantity(data.moq)
          console.log(data)
        })
     }, [id, setTool]);
    // const {
    //   data: tool,
    //   isLoading,
    //   refetch,
    // } = useQuery('tools', () =>
   
    
    // );
   
    // if(isLoading){
    //       return <Loading />
    //   }
    // let moq = 0;
    //    if (tool) {
    //      moq = tool.moq;
    //    }
      

      const handleIncrease = () =>{
          if(quantity < tool.available){
            setQuantity(quantity+1)
          }else{
            setQuantity(0)
          }
      }
      console.log(tool.moq)
    const handleDecrease = () =>{

      if(quantity <= tool.moq){
        toast.error(`You can't decrease quantity more than Minimum order quantity`)
    }else{
      setQuantity(quantity-1)
    }
  }
  return (
    <div className='w-[90%] lg:w-[70%] mx-auto my-20 text-white'>
      <div className='grid py-10 lg:px-8 px-4 lg:grid-cols-3 bg-gradient-to-r bg-secondary to-primary gap-5 rounded-3xl'>
        <div className='col-span-1'>
          <img
            className='lg:w-[400px] lg:h-[400px] md:h-[200px] w-[300px]  h-[150px] rounded-3xl mx-auto object-cover  hover:shadow-xl shadow-primary duration-500 hover:scale-105'
            src={tool?.img}
            alt=''
          />
        </div>
        <div className='col-span-2 lg:px-10 md:px-8 px-3'>
          <h2 className='text-3xl font-semibold mt-5 lg:mt-0 '>{tool.name}</h2>
          <p className='mt-4 whitespace-pre-wrap'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            vitae dolore aliquid ratione! Libero nihil deserunt voluptates.
            Dolor, quis natus.
          </p>

          <h3 className='text-xl font-bold mt-6'>
            Price : ${tool.price}/piece
          </h3>
          <div className='lg:mt-10 mt-5 '>
            <div>
              <p>
                Minimum Order Quantity :{' '}
                <span className='font-semibold'> {tool.moq}</span>
              </p>
              <p>
                Available Quantity :
                <span className='font-semibold'> {tool.available}</span>
              </p>
            </div>
            <div className='flex mt-5'>
              <div className='bg-white p-2 flex items-center rounded-xl justify-start'>
                <button
                  onClick={handleDecrease}
                  className='btn btn-sm btn-outline mx-3'
                >
                  <FontAwesomeIcon
                    icon={faMinus}
                    className='font-bold text-gray-900'
                  />
                </button>
                <p className='text-accent text-base font-extrabold relative w-6 mx-auto text-center'>
                  {quantity === 0 ? setQuantity(tool.moq) : quantity}
                </p>
                <button
                  onClick={handleIncrease}
                  className='btn btn-sm btn-outline mx-3'
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className='font-extrabold text-gray-900'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;