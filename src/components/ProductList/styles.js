import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 950px;
    height: auto;
    max-height: 500px;
    padding-top: 120px;
    text-align: center;
`;

export const UserPicture = styled.img`
    width: auto;
    height: 50px;
    padding: 0px 10px;
`;

export const ProductTitle = styled.h1`
    margin: 0;
`;

export const ProductPrice = styled.h2`
    
`;

export const ProductImage = styled.img`
    width: auto;
    height: 300px;
`;

export const UserInfo = styled.div`
    padding: 10px 30px;
    color: #666;
    height: 450px;
    width: 500px;
`;

export const UserProfileBox = styled.div`
    width: 60px;
    height: 60px;
    background: #CCC;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

export const UserHead = styled.div`
    display: block;
    text-align: left;
`;

export const UserBody = styled.div`
    display: block;
    text-align: left;
`;

export const ProductInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 400px;
    background: #FFF;
    border-radius: 15px;
`;

export const UserDescription = styled.div`
    max-height: 60px;
    padding: 5px 10px;
`;

export const UserName = styled.h3`
    margin: 0;
`;

export const Username = styled.h5`
    margin: 0;
    font-weight: 500;
`;

export const Galery = styled.div`

`;

export const ProductDescription = styled.div`
    padding-top: 30px;
`;

export const ProductSizeBox = styled.ul`
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    display: flex;
    width: 100%;
    height: 60px;
`;

export const SizeItem = styled.li`
    display: flex;
    cursor: pointer;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    min-width: 60px;
    background: #222;
    border-radius: 5px;
    height: auto;
    margin: 5px 5px 5px 0px;

    &:hover {
        opacity: 0.6;
    }
`;

export const BuyButton = styled.button`
    cursor: pointer;
    width: 100%;
    height: 40px;
    background: #222;
    border: none;
    border-radius: 5px;
    color: #FFF;

    &:hover {
        opacity: 0.6;
    }
`;