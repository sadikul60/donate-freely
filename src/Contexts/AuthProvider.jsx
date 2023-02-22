import {  React, createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import app from "../firebase/Firebase.config"

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //creat user with email & password
    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUser,
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

