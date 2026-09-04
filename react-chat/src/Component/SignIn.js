import React from "react";
import firebase from "../Firebase";

function SignIn() {

  const signInWithGoogle = () => {
    // Implement Google sign-in logic here
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        // Handle successful sign-in
        console.log("Signed in as:", result.user);
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error("Error signing in:", error);
      });
  };

  return (
    <div>
      <button onClick={signInWithGoogle} className="sign-in-button">Sign in with Google</button>
    </div>
  );
} 

export default SignIn;