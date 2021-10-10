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


step-3:
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase
6. export useFirebase

step-4:
1. Create a auth context
2. Create context Provider 
3. Use Auth Provider
4. Create useAuth Hook

*/
