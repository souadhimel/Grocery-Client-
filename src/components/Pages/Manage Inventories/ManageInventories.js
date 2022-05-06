import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SingleInventory from '../Single Inventory/SingleInventory';

const ManageInventories = () => {

    const [vegetables,setVegetables]=useState([])
    
    
    useEffect(() => {
        fetch('http://localhost:5000/vegetable')
        .then(res=>res.json())
        .then(data=>setVegetables(data))
    },[])

    const inventoryDelete=id=>{
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
        <div>
          <div className="add">
           <Link to="/addProducts"> <button style={{backgroundColor:"#516be8",color:"white", margin:"40px auto",justifyContent:"center",alignItems:"center"}} className="delivered_click">Add Items</button></Link>
           </div>
            
         <h2 className="heading mt-5">Manage Inventories</h2>
        <Container className="mb-5">
  
  <Row>
  {
            vegetables.map((vegetable) =>
                (<SingleInventory
                
                key={vegetable._id}
                vegetable={vegetable} 
                inventoryDelete={inventoryDelete}
                               
                ></SingleInventory>
            ))
        }
  </Row>
</Container>
    </div>
    );
};

export default ManageInventories;