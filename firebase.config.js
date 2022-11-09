import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrNbAA17ziQzEbUe5V61V47PmM8WzwaQU",
  authDomain: "social-network-app-c89fe.firebaseapp.com",
  projectId: "social-network-app-c89fe",
  storageBucket: "social-network-app-c89fe.appspot.com",
  messagingSenderId: "491337162898",
  appId: "1:491337162898:web:663b056b6522205f3c064b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
// const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// };
