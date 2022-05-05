import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Details.css"

const Details = () => {

    const {id}=useParams()
    const [vegetable,setVegetable]=useState({})
     useEffect(() => {
        const url=`http://localhost:5000/vegetable/${id}`
        console.log(url);
         fetch(url)
        .then(res=>res.json())
      .then((data)=>setVegetable(data));
     },[]) 

// const handleDelivered=()=>{
//   const newQuantity = parseInt(quantity)-1
//   const makeQuantity = {newQuantity}
//   console.log(quantity);
// }


    return (
        <div>
           <h2 className="heading">Details</h2>
           
          <div className="row_container">
          <div className="col-md-6 ms-5 mb-5">
            <img style={{width: '70%', height: '100%'}} src={vegetable.img} alt="" />
           </div>
           <div  className="col-md-6 ms-2 mt-5">
           <h3 style={{lineHeight: '20px'}}>Product Name:{vegetable.name}</h3>
           <h4 style={{lineHeight: '20px'}}>Supplier Name:{vegetable.spName}</h4>
           <h4 style={{lineHeight: '20px'}}>Price:{vegetable.price}</h4>
           <h4 style={{lineHeight: '20px'}}>Quantity:{vegetable.quantity}</h4>
           <h4 style={{lineHeight: '20px'}}>Description:{vegetable.description}....</h4>
           <button className="delivered_click">Delivered</button>
           </div>
          </div>
            
        </div>
    );
};

export default Details;