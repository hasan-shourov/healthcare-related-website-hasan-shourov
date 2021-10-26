import React from 'react';
import { Bounce, Roll, Slide, Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';

const HomeBouns2 = () => {
    return (
        <div style={{backgroundColor:"rgb(154, 230, 230, 0.080)"}}>
            <div className="container pt-4 ">
                <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex align-items-center">
                       <div className="text-md-center">
                       <h1 className="display-5 fw-bold text-danger">Emergency? </h1>
                        <h1 className="display-3 fw-bold ">Find Nearest </h1>
                        <h1 className="display-5 fw-bold text-danger">Medical Facility</h1>
                        <br />
                        <Bounce bottom>
                        <div>
                             <Link to="jdhf"><button className="btn btn-info me-4">View Hospital</button></Link>
                             <Link to="doctors"><button className="btn btn-outline-info fw-bold">View Doctor</button></Link>
                    
                       
                       </div>
                       </Bounce>
                       </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <Slide right><img width="80%" src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/08/img-01-1.png" alt="" /></Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBouns2;