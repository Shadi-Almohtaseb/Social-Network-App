import React, { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.config";
import { db } from '../firebase.config';
import { ref, set, onValue } from "firebase/database";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userIn, setUserIn] = useState({});
  const [emailExist, setEmailExist] = useState(false);
  const [usersList, setUsersList] = useState([]);


  useEffect(() => {
    const query = ref(db, "users");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setUsersList((usersList) => [...usersList, item]);
          console.log(data)
        });
      }
    });
  }, []);

  const addUsers = (result) => {
    set(ref(db, 'users/' + usersList.length), {
      email: result.user.email,
      name: result.user.displayName,
      image: result.user.photoURL,
    });
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        localStorage.setItem("UserEmail", result.user.email);
        localStorage.setItem("UserName", result.user.displayName);
        for (let i = 0; i <= usersList.length; i++) {
          if (result.user.email !== usersList[i].email) {
            setEmailExist(true)
            break;
          }
        }
        if (emailExist)
          addUsers(result);
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
