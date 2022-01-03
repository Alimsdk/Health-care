import React from 'react';
import {  Navigate, Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user}= useAuth();
    return (
       
        user?children:<Navigate to='/login'/>
    )
};

export default PrivateRoute;