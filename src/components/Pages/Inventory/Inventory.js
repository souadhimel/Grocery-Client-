import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap';
import "./Inventory.css"
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [vegetables,setVegetables]=useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/vegetable')
        .then(res=>res.json())
        .then(data=>setVegetables(data))
    },[])
    
    return (
        <div>
            <h2 className="heading mt-5">Inventory</h2>
            

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
           
        <div className="rating_btn"><button className="btn_text"><Link to="/manageInventories" className="link_text">Manage Inventories</Link></button></div>
        </div>
    );
};

export default Inventory;
 