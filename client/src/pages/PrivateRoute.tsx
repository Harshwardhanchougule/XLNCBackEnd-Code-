import React from 'react';
import { Route, Redirect } from 'wouter';
import { useAuth } from './AuthContext';

interface PrivateRouteProps {
    component: React.ComponentType<any>;
    path: string;
    adminOnly?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    component: Component,
    path,
    adminOnly = false
}) => {
    const { isAuthenticated, isAdmin } = useAuth();

    return (
        <Route
            path={path}
            component={() => {
                if (!isAuthenticated) {
                    return <Redirect to="/login" />;
                }

                if (adminOnly && !isAdmin) {
                    return <Redirect to="/" />;
                }

                return <Component />;
            }}
        />
    );
};

export default PrivateRoute;