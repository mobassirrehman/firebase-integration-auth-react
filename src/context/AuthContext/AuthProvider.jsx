import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //get current user info
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      console.log("inside observer: if", currentUser);
    } else {
      console.log("insider observer: else");
    }
  });

  // useEffect(() => {}, [])
  `step-1: set up observer
  step-2: set in a variable
  step-3: return and call the variable so that you can clear the reference.
  `;
  useEffect(() => {
    //set the observer
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user in auth state change", currentUser);
      setUser(currentUser);
    });
    //clear the observer on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
