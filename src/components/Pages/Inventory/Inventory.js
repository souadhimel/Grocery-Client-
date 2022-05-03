import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap';

const Inventory = () => {
    const [vegetables,setVegetables]=useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/vegetable')
        .then(res=>res.json())
        .then(data=>setVegetables(data))
    },[])
    
    return (
        <div>
            <h2 className="heading mt-5">Products</h2>
            

            <Container className="mb-5">
      
      <Row>
      {
                vegetables.map((vegetable) =>
                    (<Package
                    key={vegetable._id}
                    vegetable={vegetable}      
                    
                    ></Package>
                )).slice(0,6)
            }
      </Row>
    </Container>
           
        
        </div>
    );
};

export default Inventory;
 