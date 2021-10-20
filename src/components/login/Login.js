import React from 'react';


const Login = () => {
    
    return (
        <div style={{height:"50vh"}} className="text-center">
            <form className="text-center py-5">
                <input type="email" name="" placeholder="Your email" id="" />
                <br /><br />
                <input type="password" name="" placeholder="Your password" id="" />
                <br /><br /><br />
                <button type="submit" className="btn btn-outline-danger">Log In</button>
            </form>
            <button  className="btn btn-light" ><i className="fab fa-google bg-primary text-white p-2 rounded-circle"></i> use google</button>
        </div>
    );
};

export default Login;