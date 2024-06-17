import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
    const loggedIn = Cookies.get('loggedin') === 'true';

    if (!loggedIn) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;

