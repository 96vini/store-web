import React, { useState, useEffect } from "react";

import Navbar from '../../components/Navbar';
import CartView from '../../components/CartView';

export default function Cart() {
    const [products, setProducts] = useState([
        {
            price: 50.00,
            name: 'Camiseta do Corinthians'
        },
        {
            price: 50.00,
            name: 'Camiseta do Corinthians'
        },
        {
            price: 50.00,
            name: 'Camiseta do Corinthians'
        },
    ]);

    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className="w-full h-auto flex justify-center">
                <CartView product={products}/>
            </div>
        </div>
    );
}

