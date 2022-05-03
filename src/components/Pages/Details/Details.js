import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {

    const {packageId}=useParams()
    const [vegetable,setVegetable]=useState({})
     useEffect(() => {
        const url=`http://localhost:5000/vegetable/${packageId}`
        // console.log(url);
         fetch(url)
        .then(res=>res.json())
      .then((data)=>setVegetable(data));
     },[])
    
   
    return (
        <div>
           <h2 className="heading">Details</h2>
           <h3>Name:{vegetable.name}</h3>
           <h4>Price:{vegetable.price}</h4>
           <h4>Quantity:{vegetable.quantity}</h4>
           <h4>Description:{vegetable.description}</h4>
           <div className="left_side">
               <img src='' alt="" />
           </div>
           <div className="right_side">
           </div>
            
        </div>
    );
};

export default Details;