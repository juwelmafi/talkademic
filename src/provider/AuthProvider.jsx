import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log("user in the state change" ,user);

  //Register//

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Google LogIn //

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Log in //

  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user //

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // Log out

  const logOutUser = () => {
    setLoading(true);

    return signOut(auth);
  };

  useEffect(()=>{
    const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
       setUser(currentUser);
       setLoading(false);
     })
     return ()=>{
         unSubscribe();
     }
   }, [])

  const authData = {
    user,
    setUser,
    registerUser,
    googleLogin,
    logInUser,
    updateUser,
    logOutUser,
    loading,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
