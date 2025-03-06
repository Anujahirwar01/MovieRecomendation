import React,{useContext, useEffect} from "react";
import { UserDataContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if(!token){
            navigate('/login')
        }}, [token])
        const dest = localStorage.getItem('dest');
        if(dest){
            localStorage.removeItem('dest');
            navigate(dest);
        }
    return(
        <>{children}</>
    );
    }

export default UserProtectedWrapper;