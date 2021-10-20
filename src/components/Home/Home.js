import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../banner/Banner';
import HomeService from '../HomeService.js/HomeService';

const Home = () => {
    const about ={
        textDecoration: "underline",
    textDecorationColor: "rgb(214, 102, 21)"
    }
    return (
        <div>
            <Banner></Banner>
            <div style={{backgroundColor:"rgb(154, 230, 230, 0.200)"}}>
            <div className="container py-md-5 py-sm-2 " >
                <h1 className="text-center display-3 fw-bold heeead" style={about}>About Us</h1>
                
                <p className="text-center fs-5 text-secondary"> MediCal is an online medical service targeting emerging markets that are rapidly digitising. <br /> Our mission is to improve the health and wellbeing of the populations we serve. <br /> We have developed accessible and affordable telehealth services that aims to support the public health system, <br /> research and clinical trials. <br /> <br />
                <Link to="about">
                <button className="btn btn-outline-primary rounded-pill ">See more</button>
                </Link>
                 </p>
                
               
            </div>
            </div>
            <HomeService ></HomeService>
        </div>
    );
};

export default Home;