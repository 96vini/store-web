import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: #FFF;
`;

export const PreviousProduct = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    width: 60px;
    height: 60px;
    background: #222;
    left: 10%;
    top: 35%;
    border-radius: 50%;

    &:hover {
        opacity: 0.6;
    }
    
`;

export const PreviousIcon = styled.div`
    width: 35px;
    height: 35px;
    background-image: url('/images/previous_icon.png');
    background-size: cover;
`;

export const NextProduct = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    cursor: pointer;
    width: 60px;
    height: 60px;
    background: #222;
    right: 10%;
    top: 35%;
    border-radius: 50%;

    &:hover {
        opacity: 0.6;
    }
`;

export const NextIcon = styled.div`
    width: 50px;
    height: 50px;
    background-image: url('/images/next_icon.png');
    background-size: cover;
`;
