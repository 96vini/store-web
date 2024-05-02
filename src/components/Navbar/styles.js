import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    justify-content: center;
    position: absolute;
    height: 80px;
    width: 100%; 
    background-color: #222;
    position: absolute;
    z-index: 2;

    @media (max-width: 768px) {
        height: auto;
    }
`;

export const Box  = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const Logotipo = styled.img`
    width: 40px;
    height: 40px;
`;

export const BoxSearch = styled.div`
    width: 400px;

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 10px;
    }
`;

export const SearchInput = styled.input`
    width: 80%;
    display: flex;
    justify-self: center;
    height: 40px;
    border: none;
    padding: 0px 15px;
    text-align: center;
`;

export const BoxUser = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 200px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
    }
`;

export const BoxCartUser = styled.div`
    width: 45px;
    height: 34px;
    cursor: pointer;
    background-image: url('/images/cart_icon.png');
    background-size: cover;
    margin: 15px;

    &:hover {
        opacity: 0.4;
    }
`;

export const BoxCartUserContainer = styled.div`
    display: flex;
    position: absolute;
    top: 75px;
    flex-direction: column;
    right: 20%;
    background: #FFF;
    padding: 10px;
    border-radius: 10px;
    border: none;
    justify-content: center;
    align-items: center;
    -webkit-box-shadow: 0px 3px 5px -3px rgba(0,0,0,0.72);
    -moz-box-shadow: 0px 3px 5px -3px rgba(0,0,0,0.72);
    box-shadow: 0px 3px 5px -3px rgba(0,0,0,0.72);

    @media (max-width: 768px) {
        position: static;
        width: 100%;
        margin-top: 10px;
    }
`;

export const CartItemsContainer = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;


export const FinishCart = styled.button`
    width: 100%;
    height: 40px;
    background: #222;
    color: #FFF;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
        height: 0.6;
    }
`;

export const BoxProfilePicture = styled.div`
    display: flex;
    padding: 10px;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
`;

export const ProfilePicture = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;
