import React from "react";
import firebase from '../Firebase.js';

const auth = firebase.auth();

function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()} className="sign-out-button">Sign Out</button>
  )
}

export default SignOut;