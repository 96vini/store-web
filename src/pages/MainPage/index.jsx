import React, { useEffect, useState } from 'react';

import { Container, PreviousProduct, NextProduct, PreviousIcon, NextIcon } from './styles';

import Navbar from '../../components/Navbar';
import ProductList from '../../components/ProductList';

import api from '../../services/api';

const fetchMainProduct = async() => {
    const response = await api.get('/products');
    return response.data.body;
}

export default function MainPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchMainProduct().then(products => setProducts(products));
    }, []);


    return (
        <Container>
            <Navbar />
            <div>
                <PreviousProduct>
                    <PreviousIcon />
                </PreviousProduct>
                {products.map((product, index) => (
                    <ProductList product={product} key={index}/>
                ))}
                <NextProduct>
                    <NextIcon />
                </NextProduct>
            </div>
        </Container>
    );
}