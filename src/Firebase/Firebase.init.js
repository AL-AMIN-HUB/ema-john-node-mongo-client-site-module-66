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

Step-2: setup component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register


step-3: setup auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase
6. export useFirebase

step-4: create auth context hook (useAuth)
1. Create a auth context
2. Create context Provider 
3. Set context provider context value
4. Use Auth Provider
5. Create useAuth Hook


step-5: create private route
1. Create private Route
2. set private route

*/
