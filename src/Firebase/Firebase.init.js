import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;

/* 

steps for Authentication: 
-----------------------------------

Step-1: Initial Setup
1. firebase: create projects
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method

-----------------------

Step-2: 
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register

*/
