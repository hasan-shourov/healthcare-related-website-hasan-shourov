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
                    <h1 className="mt-md-5 mt-sm-3 " >this is our heading section</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias porro deleniti quaerat cupiditate, aliquid officiis atque ea sunt perspiciatis doloremque.</p>
                    
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