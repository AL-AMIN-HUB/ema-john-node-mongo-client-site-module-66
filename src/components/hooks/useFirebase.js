import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const GoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider).catch((error) => {
      setError(error.message);
    });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser();
      })
      .catch((error) => setError(error.message));
  };

  //   observe whether user auth state changed or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);

  return {
    user,
    error,
    logOut,
    GoogleSignIn,
  };
};

export default useFirebase;
