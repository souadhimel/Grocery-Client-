import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Package.css";
import Col from 'react-bootstrap/Col'

const Package = (props) => {
    const { img, name, description, price,quantity,spName,_id } = props.vegetable;
    const navigate = useNavigate();
    const go=id=>{
      navigate(`/vegetable/${id}`)
    }
    return (
        <Col className="my-5 text-center"  sm={12} md={6} lg={4}>
      
        <Card style={{ height: "450px" }} className="mx-1  shadow">
          <div className="text-center">
            <Card.Img
              style={{ width: "300px", height: "200px", margin:'20px 0' }}
              variant="top"
              src={img}
            />
          </div>
          <div style={{backgroundColor:"rgb(174, 167, 167)"}}>
          <Card.Body style={{marginTop:"30px"}}>
            <Card.Title className="text-uppercase">{name}</Card.Title>
            <Card.Title>Price: {price} TK</Card.Title>
            <Card.Title>Supplier Name:{spName}</Card.Title>
            <Card.Title>Quantity: {quantity}kg/Piece</Card.Title>
            <Card.Text>{description.slice(0,50)}...</Card.Text> 
            <button className="go" style={{margin:"15px",padding:"12px", backgroundColor:"#5a189a",borderRadius:"5px", color:"white", width:"50%"}}  onClick={()=>go(_id)}>Update</button>
            
          </Card.Body>
          </div>
        </Card>
    
    </Col>
    );
};

export default Package;

