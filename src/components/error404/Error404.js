import React from 'react';
import { Link } from 'react-router-dom';
import errorimg from "../../image/pngegg (1).png"
const Error404 = () => {
    return (
        <div style={{height:"50vh"}}>
           <div className="d-flex justify-content-center">
           <img className="w-25 mt-3" src={errorimg}  alt="" />
           </div>
           <div className="text-center">
               <Link to="home">Back Home</Link>

           </div>
        </div>
    );
};

export default Error404;