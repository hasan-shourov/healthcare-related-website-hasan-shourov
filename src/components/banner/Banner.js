import React from 'react';
import banner from "../../image/slider-1.jpg"
import './banner.css'

const Banner = () => {
    const bgImg = {
        backgroundImage: `url(${banner})`,
        backgroundRepeat:" no-repeat",
        
    }
   
    return (
        <div style={bgImg} className="bgmain" >
            <div className=" container">
                <div className="row">
            <div className="col-8 ">
                <div className="description">
                    <h1 className="mt-md-5 mt-sm-3 " >A telemedicine service Platform</h1>
                    <p>Telemedicine allows health care professionals to evaluate, diagnose and treat patients at a distance using telecommunications technology. The approach has been through a striking evolution in the last decade and it is becoming an increasingly important part of the American healthcare infrastructure.</p>
                    
                </div>
                <div className="btnn">
                <button className="btn fw-bold btn-success rounded-pill">read more...</button>
                </div>
            </div>
            <div className="col-4"></div>
            </div>
            </div>
        </div>
    );
};

export default Banner;