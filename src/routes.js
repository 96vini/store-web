import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Product from './pages/Product';
import Cart from './pages/Cart';

export default function RoutesMap() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route exact path='/cart' element={<Cart />} />
                <Route exact path="/product/:id" element={<Product />} />
            </Routes>
        </Router>
    );
}