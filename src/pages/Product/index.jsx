import React, { useState, useEffect } from "react";

import Navbar from "../../components/Navbar";

import ProductView from "../../components/ProductView";
import ProductNotFound from '../../components/ProductNotFound';

import { useParams } from "react-router";
import api from "../../services/api";

export default function Product() {

    const { slug } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductBySlug(slug);
    }, []);

    async function getProductBySlug(slug) {
        await api.get(`/product/${slug}`).then(res => {
            setProduct(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="w-full h-screen">
            <Navbar />
            <div className="w-full h-auto flex justify-center">
                {product ? (
                    <ProductView product={product}/>
                ) : (
                    <ProductNotFound />
                )}
            </div>
        </div>
    );
}

