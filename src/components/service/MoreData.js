import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MoreData = () => {
    const {dynamicId} = useParams();
    const [use, setUse] = useState({})
    useEffect(()=>{
        fetch("/data.json")
        .then(res=>res.json())
        .then(data => {
            const more = data.find(d=>d.id == dynamicId)
            setUse(more)
            console.log(more);
        })
    },[])
    const {name, photo,degree, special, experiance, summery ,license } =use;
    
    return (
        <div style={{height:"110vh"}}>
            <div className="d-flex flex-wrap p-5">
                <div className=" ">
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
                
                <button className='btn btn-info mt-5'>Get Appoinment</button>
                <p className="mt-5 ms-3">or- <strong > call : +1204502</strong></p>
            </div>
        </div>
    );
};

export default MoreData;