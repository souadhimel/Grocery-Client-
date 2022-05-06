import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Details.css";
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Details = () => {
    const {id}=useParams();
    const [vegetable,setVegetable]=useState({})
    let {img,name,price,description,spName,quantity}=vegetable;
     useEffect(() => {
        const url=`http://localhost:5000/vegetable/${id}`
        console.log(url);
         fetch(url)
        .then(res=>res.json())
      .then((data)=>setVegetable(data));
     },[]) 

const delivered= () => {
let Remaining=parseFloat(+vegetable.quantity)-1
let newInventory={img,name,price,quantity:Remaining,description,spName}
setVegetable(newInventory)
fetch(`http://localhost:5000/vegetable/${id}`,{
  method: 'PUT',
  body: JSON.stringify(newInventory),
  headers:{
    'Content-Type': 'application/json',
  },
})
.then((response) =>response.json())
.then(data=>{
  toast("Delivered succeeded!!!!!!!!!!!")
})
}


const restock= (e) => {
  e.preventDefault();
let updatedQuantity=parseFloat(+vegetable.quantity)+ parseFloat(e.target.upQuantity.value);
let newInventory={img,name,price,quantity:updatedQuantity,description,spName}
setVegetable(newInventory)
fetch(`http://localhost:5000/vegetable/${id}`,{
  method: 'PUT',
  body: JSON.stringify(newInventory),
  headers:{
    'Content-Type': 'application/json',
  },
})
.then((response) =>response.json())
.then(data=>{
  e.target.reset()
  toast("Restock succeeded!!!!!!!!!!!")
})
     }

    return (
        <div>
           <h2 className="heading">Details</h2>
           
          <div className="row_container">
          <div className="col-md-6 ms-5 mb-5">
            <img style={{width: '70%', height: '100%'}} src={vegetable?.img} alt="" />
           </div>
           {/* Delivered items */}
           <div  className="col-md-6 ms-2 mt-5">
           <h3 style={{lineHeight: '20px'}}>Product Name:{vegetable?.name}</h3>
           <h4 style={{lineHeight: '20px'}}>Supplier Name:{vegetable?.spName}</h4>
           <h4 style={{lineHeight: '20px'}}>Price:{vegetable?.price}</h4>
           <h4 style={{lineHeight: '20px'}}>Quantity:{vegetable?.quantity}</h4>
           <h4 style={{lineHeight: '20px'}}>Description:{vegetable?.description}....</h4>
          <button onClick={() =>delivered(quantity)}  className="delivered_click">Delivered</button>
           </div>
           
          </div>
          {/* Restock items */}
          <div className="restock_items">
            <p> <h4 style={{fontSize:"35px"}} className="text-center ">Restock items</h4></p>
             <form onSubmit={restock} >
             <p className="quantity"><input name="upQuantity" type="number" placeholder="Add your quantity"/></p>
             <button className="add_click">Add now</button>
             </form>
          </div>
          <ToastContainer />
        </div>
    );
};

export default Details;