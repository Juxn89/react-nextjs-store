import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

interface IProviderAuth {
    children: JSX.Element
};

interface IuseProviderAuth {
    user: String,
    singIn :  (email:String, password:String) => Promise<void>
};

const AuthContext = createContext<IuseProviderAuth | null>(null);

export function ProviderAuth({children}: IProviderAuth) {
    const auth = useProviderAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}

function useProviderAuth(): IuseProviderAuth {
    const [user, setUser] = useState<String>('');
    const singIn = async(email:String, password:String) => {
        setUser('login')
    }

    return {
        user,
        singIn
    }
}
