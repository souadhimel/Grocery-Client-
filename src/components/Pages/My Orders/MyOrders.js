import React, { useEffect, useState } from 'react';
import {  Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./MyOrders.css"


const MyOrders = () => {
    const [vegetables,setVegetables]=useState([])
    const navigate = useNavigate()
const updateStock=(id)=>{
  navigate(`/vegetable/${id}`)
}
    useEffect(() => {
        fetch('http://localhost:5000/vegetable')
        .then(res=>res.json())
        .then(data=>setVegetables(data))
    },[])

    const orderCancel=id=>{
        const proceed=window.confirm('Are you sure you want to delete?')
       if (proceed) {
         const url=`http://localhost:5000/vegetable/${id}`;
        fetch(url,{
            method: 'DELETE'
        }) 
        .then(res => res.json())
        .then(data=>{
            if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                  }
                });
                const remainingProducts = vegetables?.filter(
                  (vegetable) => vegetable?._id !== id
                );
                setVegetables(remainingProducts);
              }
        })    
       }
    }
    return (
        <>
               <div>
      <div className="py-5">
        <div className="container">
          <div>
          
           <div className="add">
           <Link to="/addProducts"> <button style={{backgroundColor:"#516be9",color:"white", margin:"0 auto",justifyContent:"center",alignItems:"center"}} className="delivered_click">Add Products</button></Link>
           </div>
            <h2 className="heading">My Items</h2>
          </div>
          <div className="mx-auto">
            <Table striped bordered responsive hover>
              <thead>
                <tr>
                  <th style={{textAlign: 'center'}}>Product Id</th>
                  <th style={{textAlign: 'center'}}> Name</th>
                  <th style={{textAlign: 'center'}}>Price</th>
                  <th style={{textAlign: 'center'}}>Quantity</th>
                  <th style={{textAlign: 'center'}}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {vegetables.map((vegetable) => (
                  <tr key={vegetable._id}>
                    <td>{vegetable?._id}</td>
                    <td>{vegetable?.name}</td>
                    <td>{vegetable?.price}</td>
                    <td>{vegetable?.quantity}</td>
                    <td>
                   <div className="d-flex">  
                    <button onClick={() =>updateStock(vegetable?._id)} style={{margin:"15px",padding:"12px", backgroundColor:"green",borderRadius:"5px", color:"white", width:"50%"}}>Update stock</button>
                      <button
                        onClick={() => orderCancel(vegetable?._id)}
                        style={{margin:"15px",padding:"12px", backgroundColor:"red",borderRadius:"5px", color:"white", width:"50%"}} >Cancel</button></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
        </>

    );
};

export default MyOrders;