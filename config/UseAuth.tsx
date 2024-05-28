import { useEffect, useState } from "react";
import  { app, firebaseAuth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const UseAuth = () => {

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        console.log({user1:user})
      } else {
        // Automatically log in with predefined credentials
        const predefinedEmail = "user@example.com";
        const predefinedPassword = "user_password";
        try {
          const userCredential = await
            signInWithEmailAndPassword(app,predefinedEmail, predefinedPassword);
          setUser(userCredential.user);
           console.log({ user2: userCredential.user });
        } catch (error) {
          console.error("Automatic login failed:", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

};

export default UseAuth;
