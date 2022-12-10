import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD_MqymxqRzZe5iUHWnjBvWy4ycI9waOxU",
  authDomain: "social-network-f8771.firebaseapp.com",
  databaseURL: "https://social-network-f8771-default-rtdb.firebaseio.com",
  projectId: "social-network-f8771",
  storageBucket: "social-network-f8771.appspot.com",
  messagingSenderId: "338808278798",
  appId: "1:338808278798:web:1c9ed836b8c9977bc3115f",
  measurementId: "G-0BF9LP81MG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage};
