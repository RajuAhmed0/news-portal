import { createContext } from "react";
import auth from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext(null);

const Provider = ({ children }) => {
 
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const value = { register }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;