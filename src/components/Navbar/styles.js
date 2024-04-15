import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    justify-content: center;
    position: absolute;
    height: 80px;
    width: 100%; 
    background-color: #222;
    -webkit-box-shadow: 3px 9px 31px -16px rgba(0,0,0,0.82);
    -moz-box-shadow: 3px 9px 31px -16px rgba(0,0,0,0.82);
    box-shadow: 3px 9px 31px -16px rgba(0,0,0,0.82);
`;

export const Box  = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logotipo = styled.img`
    width: 40px;
    height: 40px;
`;

export const BoxSearch = styled.div`
    width: 400px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 30px;
    border: 0;
    padding: 0px 15px;
    text-align: center;
`;

export const BoxUser = styled.div``;

export const BoxProfilePicture = styled.div`
    display: flex;
    background-color: #DDD;
    padding: 10px;
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
`;

export const ProfilePicture = styled.img`
    width: 35px;
`;