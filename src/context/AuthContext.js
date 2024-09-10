import React,{ createContext,useContext,useState } from 'react' ;
const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }){
    const [currentUser,setCurrentUser] = useState(null);

    const login = (email,password) => {
        setCurrentUser({ email,name:"Example User",orders:[] });
    };

    const value = {
        currentUser,
        login
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}