import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthContext from './contexts/AuthContext';
import MainPage from './pages/MainPage';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './components/NotFound';

export default function RoutesMap() {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/" element={<MainPage />} />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path="/product/:slug" element={<Product />} />
                        <Route path="*" element={<Navigate to="/404" />} />
                    </>
                ) : (
                    <>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </>
                )}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
