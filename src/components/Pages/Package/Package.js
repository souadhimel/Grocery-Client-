import React from 'react';
import { Link } from 'react-router-dom';
import "./Package.css"

const Package = (props) => {
    const { img, name, description, price,quantity, } = props.vegetable;
    return (
        <div>
         <div><img style={{width: '100%', height: '100%'}} src={img} alt="" /></div>
            <div className="card_info">
            <h3>{name}</h3>
            <p>{description}</p>
            <p> {price}</p>
            <p>{quantity}</p>
            <Link to="/checkOut"><button type="button">Details</button></Link>
            </div>
      </div>
    );
};

export default Package;