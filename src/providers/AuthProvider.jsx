import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signed up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // login with google
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  // logout
  const logOut = () => {
    signOut(auth);
  };
  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      } else {
        console.log("user sign out");
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    login,
    googleLogin,
    logOut,
    setUser,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
