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
import { Navigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userIn, setUserIn] = useState({});
  // const [emailExist, setEmailExist] = useState(false);
  const [usersList, setUsersList] = useState([]);


  useEffect(() => {
    const query = ref(db, "users");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((item) => {
          setUsersList((usersList) => [...usersList, item]);
        });
      }
    });
  }, []);

  const addUsers = (result) => {
    set(ref(db, 'users/' + usersList.length), {
      email: result.user.email,
      name: result.user.displayName,
      avatar: result.user.photoURL,
      imageProfile: 'https://source.unsplash.com/random'
    });
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const userProfile = usersList.find(u => u.email === result.user.email)
        console.log(userProfile)
        // for (let i = 0; i <= usersList.length; i++) {
        //   if (result.user.email !== usersList[i].email) {
        //     setEmailExist(true)
        //     break;
        //   }
        // }
        if (result.user.email !== userProfile.email) {
          addUsers(result);
        }
      })
      .catch((error) => {
        console.log('error')
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
    usersList, setUsersList
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
