import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routerConfig from './routerConfig';
import ProtectedRoute from '../components/ProtectedRoute';

const RouterMapping = () => {
    return (
        <Routes>
            {routerConfig.map(({ path, component: Component, protectedRoute }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        protectedRoute ? (
                            <ProtectedRoute>
                                <Component />
                            </ProtectedRoute>
                        ) : (
                            <Component />
                        )
                    }
                />
            ))}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default RouterMapping;
