import React from 'react';
import "./Speciality.css"
import {
    FcEngineering,
    FcOnlineSupport,
    FcProcess,
    FcInTransit,
    FcBullish,
    FcBrokenLink,
    FcCurrencyExchange,
    FcBiotech,
    FcBinoculars,
    FcCollect,
    FcTreeStructure,
  } from "react-icons/fc";
  import { GiEarthAmerica } from "react-icons/gi";

const Speciality = () => {
    return (
        <div>
            <section style={{ marginTop: 50 }} className="services" id="services">
      <div>
        <h1 className="heading">
        Speciality
        </h1>
      </div>

      <div className="box-container text-center">
        <div className="box">
          <i>
            <FcEngineering></FcEngineering>
          </i>
          <h3>Exclusive offers</h3>
          <p>Choose from our huge collections of seasonal vegetables with huge offers</p>
        </div>
        <div className="box">
          <i>
            <FcOnlineSupport></FcOnlineSupport>
          </i>
          <h3>Customer Care</h3>
          <p>We are 24/7 open just to improve your food taste</p>
        </div>
        <div className="box">
          <i>
            <FcBrokenLink></FcBrokenLink>
          </i>
          <h3>Health guide</h3>
          <p>Being healthy is the state of being "happy"</p>
        </div>
        <div className="box">
          <i>
            {" "}
            <FcProcess></FcProcess>
          </i>
          <h3>Eco friendly</h3>
          <p>We provide eco friendly and farm-fresh products</p>
        </div>
        <div className="box">
          <i>
            <FcInTransit></FcInTransit>
          </i>
          <h3>Fastest transit</h3>
          <p>We will reach your product within the shortest time in your door step</p>
        </div>
        <div className="box">
          <i>
            <FcBullish></FcBullish>
          </i>
          <h3>Fastest growing</h3>
          <p>We are fast grown up in Bangladesh</p>
        </div>
        <div className="box">
          <i>
            <FcCurrencyExchange></FcCurrencyExchange>
          </i>
          <h3>Easy payment</h3>
          <p> Enjoy 0% interest for installment payment. * Conditions Apply</p>
        </div>
        <div className="box">
          <i>
            <FcBiotech></FcBiotech>
          </i>
          <h3>Membership policy</h3>
          <p>
            1 month free membership for all citizens (unless otherwise stated). *
            Conditions Apply
          </p>
        </div>
        <div className="box">
          <i>
            <FcBinoculars></FcBinoculars>
          </i>
          <h3>Refund policy</h3>
          <p>
            We will provide free 1 week service if you find our products worse!
          </p>
        </div>
        <div className="box">
          <i>
            <FcCollect></FcCollect>
          </i>
          <h3>CSR</h3>
          <p>We are committed to provide Corporate Social Responsibility for customers .</p>
        </div>
        <div className="box">
          <i>
              <GiEarthAmerica></GiEarthAmerica>
            
          </i>
          <h3>Green earth</h3>
          <p>We are committed to green living earth for all .</p>
        </div>
        <div className="box">
          <i>
          <FcTreeStructure></FcTreeStructure>
          </i>
          <h3>Research</h3>
          <p>We are working on our product issues (quality,improvements,services).</p>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Speciality;