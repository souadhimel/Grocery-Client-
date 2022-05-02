import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';

const Inventory = () => {
    const [vegetables,setVegetables]=useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/vegetable')
        .then(res=>res.json())
        .then(data=>setVegetables(data))
    },[])
    
    return (
        <div>
            <h2 className="heading">Products</h2>
            {
                vegetables.map(vegetable =>
                    <Package
                    key={vegetable._id}
                    vegetable={vegetable}      
                    
                    ></Package>
                )
            }
        
        </div>
    );
};

export default Inventory;