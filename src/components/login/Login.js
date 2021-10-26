import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import {useLocation, useHistory } from "react-router"


const Login = () => {
    const {signinn, setIsLoading, emaail,setUsers, passworrrd,googleSignUp, users } =useAuth({})

    const location = useLocation()
    const history = useHistory()
    console.log("come from", location.state?.from);

    //after login condition throw the login page to home page
    if(users.email){
        history.push(location.state?.from || "/home")
    }
// it is for after log in we shift login to home page or expected page
    const signUpGoogle = () =>{
        googleSignUp()
        .then(result =>{
            console.log(result.user);
            setUsers(result.user)
            history.push(location.state?.from || "/home")
        })
        .catch((error)=>{
            console.log(error.message);
        })  
        .finally(()=> setIsLoading(false))  
 
    }
    return (
        <div style={{height:"50vh"}} className="text-center">
            <form onSubmit={signinn} className="text-center py-5">

                <input onBlur={emaail} type="email" name="" placeholder="Your email" id="" />
                <br /><br />

                <input onBlur={passworrrd} type="password" name="" placeholder="Your password" id="" />
                <br /><br /><br />

                <input type="submit" value="Log In" className="btn btn-outline-danger" />
 
            </form>
            <button onClick={signUpGoogle}  className="btn btn-light" ><i className="fab fa-google bg-primary text-white p-2 rounded-circle"></i> use google</button>
            <p></p>
            <Link to="signup">Don't have any account</Link>
        </div>
    );
}

export default Login