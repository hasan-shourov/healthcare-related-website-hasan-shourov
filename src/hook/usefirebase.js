import { sendEmailVerification, getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged , createUserWithEmailAndPassword, signInWithEmailAndPassword    } from "firebase/auth";
import React from 'react';
import { useEffect } from "react";
import { useState } from 'react';
import { useHistory, useLocation } from "react-router";
import Authentication from "../firebase/firebase.init";
Authentication()


const useFirebase = () => {
    // statess
    const [users, setUsers] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()


    const auth = getAuth();
    //----------------------------------------------
    //google sign up -------------------------------
    //----------------------------------------------
    const googleSignUp = () =>{
        const googleProvider = new GoogleAuthProvider();
      return  signInWithPopup(auth, googleProvider)
        


    }
     //---------------------------------
    //sign Out --------------------------
    const signoout = () => {
        signOut(auth)
        .then(()=>{
            //sign out
        })
        .catch((error)=>{
            console.log(error);
        })
    };
    //------------------------------------
    //get the currently sign in user
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
        })
        return () => unsubscribe;
    },[])

    //-----------------------------------------
    //email password sign up authentication 
    //-----------------------------------------

    //set name value
    const setnaame = (e) =>{
        setName(e.target.value)
    }
    //set email value 
    const emaail = e =>{
        setEmail(e.target.value);
    };
    //set pass value
    const passworrrd = e =>{
        setPassword(e.target.value)
    };

    //set authentication 
    const submitForm = e =>{
        e.preventDefault()
        //--------password validation
      if(password.length < 6 ) {
       return  setError("password must be 6 carecters")
    }
    if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
        return setError("include At least one special character")
    }

    // console.log(email, password, name);
        createUserWithEmailAndPassword(auth, email, password, name)
      
        .then((result)=>{
            console.log(result.user);
            setError('')
            verification()
            
        })
        .catch((error)=>{
            
            console.log(error.message);
            setError('')
        })
        
    };

    //signin user 
    const signinn = e =>{
        e.preventDefault()
      signInWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result.user);
            setError('')
            
        })
        .catch((error)=>{
            console.log(error.message);
            
        })
    };

    //Send a user a verification email
    const verification = () =>{
        sendEmailVerification(auth.currentUser)
  .then(() => {
    
  });
    }
    return {
        googleSignUp,
        users,
        signoout,

        submitForm,
        setnaame,
        emaail,
        passworrrd,
        error,

        signinn,
        setUsers,
        setError
    }
};

export default useFirebase;