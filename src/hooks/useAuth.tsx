import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from 'services/api';

interface IProviderAuth {
    children: JSX.Element
};

interface IuseProviderAuth {
    user: String,
    singIn :  (email:string, password:string) => Promise<void>
};

const AuthContext = createContext<IuseProviderAuth | null>(null);

export function ProviderAuth({children}: IProviderAuth) {
    const auth = useProviderAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
};

export const useAuth = () => {
    return useContext(AuthContext);
};

function useProviderAuth(): IuseProviderAuth {
    const [user, setUser] = useState<string>('');
    const singIn = async(email:string, password:string) => {
        const { auth:{login} } = endPoints;
        const options = {
            headers: {
                accept: '*/*',
                'Content-Type': 'application/json',
            },
        }
        const { data: { access_token } } = await axios.post(login, { email, password }, options);

        if(access_token) {
            Cookie.set('token', access_token.access_token, { expires: 5 });
        }
    }

    return {
        user,
        singIn
    }
};