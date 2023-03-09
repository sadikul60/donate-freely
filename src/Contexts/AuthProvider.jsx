import {  React, createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import app from "../firebase/Firebase.config"

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    //creat user with email & password
    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // updateProfile
    const profileUpdate = (profile) =>{
        setLoading(false);
        return updateProfile(auth.currentUser, profile)
    };

    // login user
    const logIn = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log out user
    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    } 

    // onAuthStateChage
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const authInfo = {
        createUser,
        profileUpdate,
        logIn,
        logOut,
        user,
        loading,
    };
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;

