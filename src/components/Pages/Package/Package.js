import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Package.css";
import Col from 'react-bootstrap/Col'

const Package = (props) => {
    const { img, name, description, price,quantity,spName,_id } = props.vegetable;
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
            <Card.Title>Quantity: {quantity}kG/Piece</Card.Title>
            <Card.Text>{description.slice(0,50)}...</Card.Text> 
            <Link to={'/package/'+_id}><button style={{margin:"15px",padding:"12px", backgroundColor:"#5a189a",borderRadius:"5px", color:"white", width:"50%"}} type="button">Details</button></Link>
          </Card.Body>
          </div>
        </Card>
    
    </Col>
    );
};

export default Package;







// <div className="single_package">
// <div><img style={{width: '100%', height: '100%'}} src={img} alt="" /></div>
//    <div className="card_info">
//    <h3>{name}</h3>
//    <p>{description}</p>
//    <p>Supplier Name:{spName}</p>
//    <p>Price:{price}</p>
//    <p>Quantity:{quantity}kg/piece</p>
//    <Link to="/checkOut"><button type="button">Details</button></Link>
//    </div>
// </div>