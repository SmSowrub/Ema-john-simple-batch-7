import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../fairBase/FairBase-config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]=useState()

    const UserSignIn=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const UserLogIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const LogOut = () =>{
        return signOut(auth)
    }
   
const userInfo={
    user,
    UserSignIn,
    UserLogIn,
    LogOut,
}
    return (
        <AuthContext.Provider value={userInfo}>
           { children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;