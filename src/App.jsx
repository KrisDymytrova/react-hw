import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterMapping from './routerConfig/RouterMapping';

const App = () => {
    return (
        <BrowserRouter>
            <RouterMapping />
        </BrowserRouter>
    );
};

export default App;
