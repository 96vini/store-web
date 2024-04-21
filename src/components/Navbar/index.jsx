import React, { useState } from 'react';

import { 
    Container,
    Box,
    Logotipo,
    BoxSearch,
    SearchInput,
    BoxUser,
    BoxCartUser,
    BoxCartUserContainer,
    FinishCart,
    BoxProfilePicture,
    ProfilePicture
} from './styles';

export default function Navbar() {

    const [showCart, setShowCart] = useState(false);

    return (
        <div class="bg-[#222] w-full h-20 flex justify-center items-center">
            <div className='md:w-[70%] sm:w-[100%] flex justify-center items-center'>
                <div className='w-1/5 flex justify-center items-center'>
                    <a href="/">
                        <div className='text-white'>
                            <svg className='h-[4vh] w-auto' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.4" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
                            </svg>
                        </div>
                    </a>
                </div>
                <div className='w-2/5 flex justify-center items-center'>
                    <SearchInput className="w-[60%] rounded-lg" type="text" placeholder='Buscar' />
                </div>
                <div className='w-1/3 h-auto flex justify-center items-center'>
                    <div className='w-full flex justify-center items-center' onClick={() => setShowCart(!showCart)}>
                        <div className='text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-auto h-[3vh]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>
                    </div>
                    <BoxCartUserContainer style={{ display: showCart ? 'block' : 'none' }}>
                        <div style={{ padding: '5px 10px' }}>
                            <h1 style={{ textAlign: 'center', margin: 0 }}>😔</h1>
                            <p>Nenhum produto adicionado ao carrinho </p>
                        </div>
                        <FinishCart>Finalizar</FinishCart>
                    </BoxCartUserContainer>
                    <div className='w-full h-auto flex justify-center items-center'>
                        <img src="/images/users/user_vinicius.jpg" className='w-auto h-[5vh] max-w-[7vh] rounded-3xl' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}