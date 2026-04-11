import {createContext,useContext, useEffect, useState} from 'react';
import {api_register,api_login} from '../api/apiUser';
const AuthContext = createContext();

const AuthWrapper = ({children})=>{
    const [logedUser,setLogedUser] = useState(()=>{
        let fetchLogedUser = JSON.parse(localStorage.getItem('loged_user')) || null;
        return fetchLogedUser;
    });

    
    const register = async (data)=>{
     let res = await api_register(data);
     return res;
    }

    const login = async (data)=>{
        let res= await api_login(data);
        console.log(res) 
        if(res.success){
          setLogedUser(res);
          localStorage.setItem('loged_user',JSON.stringify(res));
        }
        return res.success;
    }

    const logout = ()=>{
        localStorage.removeItem('loged_user');
        setLogedUser(null);

    }
    
    return (
        <AuthContext.Provider value={{register,login,logedUser,setLogedUser,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const authContext = ()=>useContext(AuthContext);
export default AuthWrapper;