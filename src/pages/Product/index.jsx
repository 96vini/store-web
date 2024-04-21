import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import ProductView from "../../components/ProductView";

export default function Product() {
    const [product, setProducts] = useState({
        price: 50.00,
        name: 'Camiseta do Corinthians'
    });

    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className="w-full h-auto flex justify-center">
                <ProductView product={product}/>
            </div>
        </div>
    );
}

