import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routerConfig from './routerConfig';

const RouterMapping = () => {
    return (
        <Routes>
            {routerConfig.map(({ path, component: Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
        </Routes>
    );
};

export default RouterMapping;


