import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from "../firebase/firebase.config";




export const AuthContex = createContext();
const auth = getAuth(app)

const AuthProvaider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)


    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Logout = () => {
        setLoding(true)
        return signOut(auth)
    }


    const signIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current User', currentUser)
            setLoding(false)
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    

    const authInfo = {
        user,
        loding,
        createUser,
        signIn,
        Logout
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvaider;