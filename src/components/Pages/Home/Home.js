import React from 'react';
import Inventory from '../Inventory/Inventory';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Speciality from './Speciality/Speciality';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Inventory></Inventory>
           <Speciality></Speciality>
           <Gallery></Gallery>
        </div>
    );
};

export default Home;