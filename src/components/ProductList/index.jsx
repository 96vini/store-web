import React, { useEffect, useState } from 'react';

import { Container, ProductImage, ProductTitle, ProductPrice, ProductSizeBox, SizeItem, UserPicture, UserInfo, UserHead, UserBody, UserProfileBox, ProductInfo, UserDescription, UserName, Username, Galery, ProductDescription, BuyButton } from './styles';

export default function ProductList({ product }) {
    const [size, setSize] = useState();

    const handleSizeClick = async(value) => {
        setSize(value);
    }

    const ProductSizeItem = ({ size, isSelected, onClick }) => {
        return (
            <SizeItem style={{ backgroundColor: isSelected ? '#666' : '#222', color: '#FFF' }} onClick={onClick}>{size}</SizeItem>
        );
    };

    return (
        <Container>
            <ProductInfo>
                <Galery>
                    <ProductImage src="/images/products/camisa_corinthians.png" alt="Camiseta Off White" />
                </Galery>    
            </ProductInfo>
            <UserInfo>
                <UserHead>
                    <ProductDescription>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductPrice>R${product.price},00</ProductPrice>
                    </ProductDescription>
                </UserHead>
                <ProductSizeBox>
                    <ProductSizeItem size="S" isSelected={size === 'S'} onClick={() => handleSizeClick('S')} />
                    <ProductSizeItem size="M" isSelected={size === 'M'} onClick={() => handleSizeClick('M')} />
                    <ProductSizeItem size="L" isSelected={size === 'L'} onClick={() => handleSizeClick('L')} />
                </ProductSizeBox>
                <UserBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ligula dolor. Ut dignissim dapibus efficitur. Sed vel turpis dignissim, auctor leo a, posuere massa. Curabitur aliquam leo quis enim posuere ultrices.</p>
                </UserBody>
                <BuyButton onClick={() => alert('Adicionado ao carrinho')}>Comprar</BuyButton>
            </UserInfo>
        </Container>
    );
}