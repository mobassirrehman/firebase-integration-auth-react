import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthProvider = ({ children }) => {

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const authInfo = {
    // createUser: createuser 
    createUser,
  };

  return (
    <AuthContext value={authInfo}>
      {children}
      </AuthContext>
  );
};

export default AuthProvider;
