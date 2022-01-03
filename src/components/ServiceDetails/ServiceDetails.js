import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ServiceDetails = () => {
  const [details,setDetails]=useState(null);
  const {id}=useParams();
      useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
         setDetails(data.services.find(service=>service.id===id));
        });
    },[])
 
  console.log(details);
  return(
   <div>
     <h2>Service Detail</h2>
     <div className='d-flex mt-5 justify-content-evenly bg-warning text-white  align-items-center'>
        <div>
          <img src={details?.img} alt="" />
        </div>
        <div>
          <h3>{details?.title}</h3>
          <p>{details?.desc}</p>
          <button className='btn btn-primary'>Book Now</button>
        </div>
      </div>

   </div>

  )
   
};

export default ServiceDetails;