import React from 'react';
import { 
    BrowserRouter as Router
}from 'react-router-dom';

import Navigation from '../Navigation';

const App = () => (
    <Router>
        <Navigation />
        <h1>App</h1>
    </Router>
);

export default App;