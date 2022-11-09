import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.config";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userIn, setUserIn] = useState({});

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        localStorage.setItem("UserEmail", result.user.email);
        localStorage.setItem("UserName", result.user.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const HandelSignOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserIn(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    signInWithGoogle,
    HandelSignOut,
    userIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
