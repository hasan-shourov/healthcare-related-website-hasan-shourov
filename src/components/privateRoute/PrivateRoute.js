import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hook/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {users} = useAuth()
    return (
        <Route
        {...rest}
        render={({location}) => users.email ? children : 
    <Redirect 
    to={{
        pathname: "/login",
        state: {from: location}
    }}
    />
    }
        >

        </Route>
    );
};

export default PrivateRoute;