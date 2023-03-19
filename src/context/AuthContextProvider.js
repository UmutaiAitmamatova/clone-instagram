import axios from 'axios';
import React, { createContext, useContext } from 'react';
import { BASE_URL } from '../consts/const';

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({children}) => {

    async function userLogin(data){
        try {
            const res = await axios.post(`${BASE_URL}/token/`, data);
            console.log('res', res);
        } catch (error) {
            console.log(error);
        }
    }

    const values = { userLogin }

    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    )
}
export default AuthContextProvider;