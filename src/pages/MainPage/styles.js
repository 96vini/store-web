import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    background: #FFF;
`;


export const CarouselContainer = styled.div`
    width: 100%;
    height: 70vh;
    background: red;
`;

export const ProductsByCategoryContainer = styled.div`
    width: 100%;
    height: 100vh;
    background: #444446;
    position: absolute;
    z-index: 1;
`;

export const CategoryButtonsBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 80px;
    margin-top: 50px;
    cursor: pointer;
`;

export const CategoryProducts = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20vh;
    gap: 10px;
    width: 100%;
`;

export const CategoryProduct = styled.div`
    width: calc(25% - 10px);
    height: 450px;
    background-color: red;
`;

export const CategoryButton = styled.div`
    justify-content: space-between;
    width: 80px;
    height: 80px;
    border-radius: 10px;
    background: pink;
    margin: 0px 10px;
    cursor: pointer;
    background-size: cover;

    &.sneaker {
        background-image: url('/images/sneaker_icon.png');
    }
`;
