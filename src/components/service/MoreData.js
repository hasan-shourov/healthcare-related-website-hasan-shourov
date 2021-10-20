import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MoreData = () => {
    const {dynamicId} = useParams();
    const [use, setUse] = useState({})
    useEffect(()=>{
        fetch("/data.JSON")
        .then(res=>res.json())
        .then(data => {
            const more = data.find(d=>d.id == dynamicId)
            setUse(more)
            console.log(more);
        })
    },[])
    const {name, photo,degree, special, experiance, summery ,license } =use;
    
    return (
        <div style={{height:"50vh"}}>
            <div className="d-flex p-5">
                <div className="pe-5 ">
                    <img src={photo} alt="" style={{width:"300px"}} />
                </div>
                <div>
                    <h3>{name}</h3>
                    <hr />
                    <h5>{degree}</h5>
                    <h5>{special}</h5>
                    <small>{experiance}</small>
                    <hr />
                    <p>{summery}</p>
                    <hr />
                    <small>License({license})</small>
                </div>
            </div>
        </div>
    );
};

export default MoreData;