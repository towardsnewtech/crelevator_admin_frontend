import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    const { path, component } = props;
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('crelevator_admin_token') !== null ? true : false;
    
    if (isAuthenticated) {
        return <Route path={path} component={component} />
    }
    return (
        navigate("/")
    )

};

export default PrivateRoute;