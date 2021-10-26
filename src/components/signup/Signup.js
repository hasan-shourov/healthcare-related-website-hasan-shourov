import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import useFirebase from '../../hook/usefirebase';
import {useLocation, useHistory } from "react-router"

const Signup = () => {
    const {googleSignUp, setIsLoading ,setError, error,setUsers, users, submitForm,
        setnaame,
        emaail,
        passworrrd} = useAuth({})
        const location = useLocation()
        const history = useHistory()
       //after login condition throw the login page to home page
       if(users.email){
        history.push(location.state?.from || "/home")
       }
        // console.log("come from", location.state?.from);
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
        <div style={{height:"50vh"}}  className="text-center">

            <form onSubmit={submitForm} className="text-center py-5">
                <input type="text" onBlur={setnaame} placeholder="Your name" /> <br /><br />

                <input onBlur={emaail} type="email" name="" id="" placeholder="Your email" required/> <br /><br />

                <input type="password" onBlur={passworrrd} name="" id="" placeholder="password" /> <br /><br />
                <p className="text-danger">{error}</p>
                <br />
                <button type="submit"  className="btn btn-danger">SignUp</button>
            </form>

            <button onClick={signUpGoogle} className="btn btn-light" ><i className="fab fa-google bg-primary text-white p-2 rounded-circle"></i> use google</button>
            <p></p>
            <Link to="login">Already have a account</Link>
 
            
        </div>
    );
};

export default Signup;