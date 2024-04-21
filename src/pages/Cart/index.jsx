import React, { useState, useEffect } from "react";
import Navbar from '../../components/Navbar';

export default function Cart() {
    const [product, setProducts] = useState([
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
        <div className="bg-red-500 w-full h-screen">
            <Navbar />
            <div className="w-full h-auto flex justify-center">
                {/* <ProductView product={product}/> */}
            </div>
        </div>
    );
}

