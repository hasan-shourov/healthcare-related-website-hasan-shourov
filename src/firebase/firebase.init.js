import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const Authentication =() =>{
    initializeApp(firebaseConfig);
};

export default Authentication;