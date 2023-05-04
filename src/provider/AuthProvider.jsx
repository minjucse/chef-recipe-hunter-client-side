import React, { useState, useEffect, createContext } from 'react';

import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    signInWithPopup, GoogleAuthProvider 
    ,GithubAuthProvider 
} from "firebase/auth";

import app from "./../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        
        return signOut(auth);
    }

    const signInGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
         
    }
    const signInGitub = () =>{
        return signInWithPopup(auth, githubProvider)
        
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {

            setUser(loggedUser);

        })

        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        signInGoogle,
        signInGitub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider