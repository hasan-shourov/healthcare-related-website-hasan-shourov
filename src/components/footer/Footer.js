import React from 'react';
import logo from "../../image/logo.png";
import foooo from "../../image/footer_bg.png"
import { Link } from 'react-router-dom';
const Footer = () => {
   
    return (
        <div className="bg-secondary">
            <br />
            <div className="container ">
            <div className="row row-cols-md-3 row-cols-sm-1">
                <div className="border-end">
                    <img src={logo} alt="" />
                   <br />
                    <small className="pt-0">Health Care Any Time Any Where</small>
                    <hr /> 
                    <div className="d-flex align-items-center me-5">
                        <div >
                        <i className="fas fa-phone bg-dark  text-white p-2 rounded-circle me-2"></i>
                        </div>

                        <div >
                        <small className="text-white ">+0035234 <br /> +08347224 Hello</small>
                        </div>
                    </div>
                    <br />


                    <div className="d-flex align-items-center">
                        <div >
                        <i className="far fa-envelope bg-dark  text-white p-2 rounded-circle me-2"></i>
                        </div>

                        <div >
                            <small className="text-white ">
                                healthkoradigmail.com 
                                <br />
                                koreya.care.health@gmail.com
                            </small>
                        </div>

                    </div>
                    <br /><br />
                    <i class="fab fa-facebook-square bg-dark text-primary rounded fs-3 me-4 p-2"></i> 
                    <i class="fab fa-twitter-square bg-dark text-info rounded fs-3 me-4 p-2"></i>
                    <i class="fab fa-youtube bg-dark text-danger rounded fs-3 me-4 p-2"></i>
                    <i class="fab fa-instagram  bg-dark text-danger rounded fs-3  p-2"></i>
                </div>


                <div className="mb-5">
                <hr /><hr />
                    <Link to="about" className="d-block text-decoration-none text-white  mb-md-3 mb-sm-2 text-center fw-bold">About Us</Link>
                    <Link to="gfg" className="d-block text-decoration-none text-white    mb-md-3 mb-sm-2 text-center fw-bold">How It Work</Link>
                    <Link to="gfgdfg" className="d-block text-decoration-none text-white mb-md-3 mb-sm-2 text-center  fw-bold">Features</Link>
                    <Link to="hgoihf" className="d-block text-decoration-none text-white mb-md-3 mb-sm-2 text-center  fw-bold">Contact Us</Link>
                    
                </div>

                <div className="border-start text-center">
                    <h4 className="fw-bold">Download Our App</h4> <br />
                    <div>
                        <img src='https://doctime.com.bd/images/logo/play_store.svg' style={{width:"200px"}} alt="" /> <br /><br />
                        <img src='https://doctime.com.bd/images/logo/apple.svg' style={{width:"200px"}} alt="" /> <br /> <br />
                        <img src='https://doctime.com.bd/images/logo/browser.svg' style={{width:"200px"}} alt="" />
                    </div>
                </div>
            </div>
            </div>
            <br />
        </div>
    );
};

export default Footer;