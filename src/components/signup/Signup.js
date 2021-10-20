import React from 'react';

const Signup = () => {
    return (
        <div style={{height:"50vh"}}  className="text-center">

            <form className="text-center py-5">
                <input type="text" placeholder="Your name" /> <br /><br />
                <input type="email" name="" id="" placeholder="Your email" required/> <br /><br />
                <input type="password" name="" id="" placeholder="password" /> <br /><br />
                <input type="password" name="" id="" placeholder="re-type password" /><br /><br /><br />
                <button type="submit" className="btn btn-danger">SignUp</button>
            </form>

            <button className="btn btn-light" ><i className="fab fa-google bg-primary text-white p-2 rounded-circle"></i> use google</button>
 
            
        </div>
    );
};

export default Signup;