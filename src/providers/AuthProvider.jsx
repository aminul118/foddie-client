import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";

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

  // Login with Google
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Logout
  const logOut = () => {
    return signOut(auth);
  };

  // Update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log("Current User:", currentUser);
        setUser(currentUser);

        if (currentUser) {
          const user = currentUser.email;
          axios
            .post(
              `${import.meta.env.VITE_BASE_URL}/jwt`,
              { email: user },
              {
                withCredentials: true,
              }
            )
            .then((res) => {
              // console.log("JWT token:", res.data);
              setLoading(false);
            })
            .catch((err) => {
              // console.log("JWT ERROR:", err);
            });
        }
      } else {
        axios
          .post(
            `${import.meta.env.VITE_BASE_URL}/logout`,
            {},
            { withCredentials: true }
          )
          .then((res) => {
            // console.log("Log out", res.data);
          });
        // console.log("User signed out");
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    login,
    googleLogin,
    logOut,
    setUser,
    updateUserProfile,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
