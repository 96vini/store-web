import React, { useEffect, useState } from 'react';

import { 
    MainContainer,
    CarouselContainer,
    ProductsByCategoryContainer,
    CategoryButtonsBox,
    CategoryButton,
    CategoryProducts,
    CategoryProduct,
} from './styles';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import styled from 'styled-components';

import Navbar from '../../components/Navbar';
import Carousel from 'react-material-ui-carousel';

import api from '../../services/api';

const fetchMainProduct = async() => {
    const response = await api.get('/products');
    return response.data.body;
}

export default function MainPage() {

    const [activeCategory, setActiveCategory] = useState('SNEAKERS');

    const [items, setItems] = useState([
        {
            type: 'video',
            url: '/images/prada_video.mov',
        },
    ]);

    return (
        <MainContainer>
            <Navbar />
            {/* <div className='w-full h-[70vh]'>
                <Carousel autoPlay={false}
                    animation="slide"
                    indicators={true}
                    timeout={500}
                    navButtonsAlwaysVisible={true}
                >
                {items.map((item, index) => (
                    <div style={{ width: '100%', height: '70vh' }}>
                        <video width="100%" height="auto" loop autoPlay>
                            <source src={item.url} type="video/mp4" />
                        </video>
                    </div>
                ))}
                </Carousel>
            </div> */}
            <div className='w-full px-10 h-screen bg-[#222] absolute z-10'>
                    <div class="w-full h-auto flex justify-center items-center">
                        <div 
                            className={`${activeCategory === 'SNEAKERS' ? 'w-[30vh] text-center py-3 mx-5 my-5 bg-gray-200 rounded-lg cursor-pointer text-xl tp-2 text-gray-500 hover:bg-gray-200 hover:rounded-lg' : 'w-[30vh] text-center py-3 mx-5 my-5 cursor-pointer text-xl tp-2 text-gray-500 hover:bg-gray-200 hover:rounded-lg'}`}
                            onClick={() => setActiveCategory('SNEAKERS')}
                            >
                            <h4>SNEAKERS</h4>
                        </div>
                        <div 
                            className={`${activeCategory === 'T-SHIRTS' ? 'w-[30vh] text-center py-3 mx-5 my-5 bg-gray-200 rounded-lg cursor-pointer text-xl tp-2 text-gray-500 hover:bg-gray-200 hover:rounded-lg' : 'w-[30vh] text-center py-3 mx-5 my-5 cursor-pointer text-xl tp-2 text-gray-500 hover:bg-gray-200 hover:rounded-lg'}`}
                            onClick={() => setActiveCategory('T-SHIRTS')}
                            >
                            <h4>T-SHIRTS</h4>
                        </div>
                        <div 
                            className={`${activeCategory === 'SOCKS' ? 'w-[30vh] text-center py-3 mx-5 my-5 bg-gray-200 rounded-lg cursor-pointer text-xl tp-2 text-gray-500 hover:bg-gray-200 hover:rounded-lg ' : 'w-[30vh] text-center py-3 mx-5 my-5 cursor-pointer text-xl tp-2 text-gray-500 hover:bg-gray-200 hover:rounded-lg '}`}
                            onClick={() => setActiveCategory('SOCKS')}
                            >
                            <h4>SOCKS</h4>
                        </div>
                        <div 
                            className={`${activeCategory === 'JACKETS' ? 'w-[30vh] text-center py-3 mx-5 my-5 bg-gray-200 rounded-lg cursor-pointer text-xl tp-2 text-gray-500 hover:bg-gray-200 hover:rounded-lg' : 'w-[30vh] text-center py-3 mx-5 my-5 cursor-pointer text-xl tp-2 text-gray-500 hover:bg-gray-200 hover:rounded-lg'}`}
                            onClick={() => setActiveCategory('JACKETS')}
                            >
                            <h4>JACKETS</h4>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div class="bg-white w-full h-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto pb-5 my-10 text-center rounded-lg mx-auto">
                            <div>
                                <img src="https://droper-media.s3.amazonaws.com/16112020211036255.webp" alt="" class=" shadow-md w-full h-[40vh] md:h-[30vh] lg:h-[40vh] rounded-md object-cover" />
                            </div>
                            <div className='w-full px-5'>
                                <h3 class="text-xl py-2">Yeezy Boost</h3>
                                <h3 class="text-2xl">$ 50.00</h3>
                                <button href="/product/1" class="w-full h-auto sm:w-full shadow-xl font-bold p-3 my-5 text-white bg-accent shadow-3xl hover:bg-[#999] rounded-lg">Buy now</button>
                                <div class="w-full h-[8vh] flex justify-end items-center">
                                    <h3 className='text-md text-primary w-auto'>Selling by Isabela</h3>
                                    <img src="/images/users/user_isabela.jpg" class="w-auto cursor-pointer h-[6vh] md:h-[5vh] m-4 rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </MainContainer>
    );
}