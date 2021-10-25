import React from 'react';
import errorimg from "../../image/pngegg (1).png"
const Error404 = () => {
    return (
        <div style={{height:"50vh"}}>
           <div className="d-flex justify-content-center">
           <img className="w-25 mt-3" src={errorimg}  alt="" />
           </div>
        </div>
    );
};

export default Error404;