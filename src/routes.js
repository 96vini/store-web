import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

export default function RoutesMap() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
            </Routes>
        </Router>
    );
}