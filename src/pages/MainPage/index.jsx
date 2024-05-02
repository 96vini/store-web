import React, { useState } from 'react';

import { 
    MainContainer,
} from './styles';

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

    const [products, setProducts] = useState([
        { name: 'Yeezy Boost', price: 50.00 },
        { name: 'Yeezy Boost 2', price: 70.00 },
        { name: 'Yeezy Boost 3', price: 30.00 },
        { name: 'Yeezy Boost 4', price: 10.00 },
    ]);

    const [categories, setCategories] = useState([
        { name: '' },
    ]);

    const [distance, setDistance] = useState(0);

    return (
        <div className='bg-cyan-600 w-full h-screen'>
            <Navbar />
                <div className='w-full flex justify-center'>
                    <div className='w-2/3 h-[70vh]'>
                        <Carousel autoPlay={false}
                            animation="slide"
                            indicators={true}
                            timeout={500}
                            navButtonsAlwaysVisible={true}
                        >
                        {items.map((item, index) => (
                            <div style={{ width: '100%', height: '70vh' }} key={index}>
                                <div className='text-center'>
                                    <h1 className='text-3xl font-thin text-secondary'>Create your collection</h1>
                                </div>
                                {/* <ThreeDObjectViewer objUrl="/objects/baseball_ball" /> */}
                            </div>
                        ))}
                        </Carousel>
                    </div>
                </div>
            <div className='w-full h-auto bg-gray-100'>
                <div className='w-full p-10'>
                    <h2 className='text-xl font-bold text-cyan-600'>Popular products</h2>
                    <div className='w-full grid grid-cols-5 justify-start items-center py-10 gap-4'>
                        <div className='w-full h-[45vh] mr-5 bg-white rounded-lg shadow-lg text-center'>
                            <img src="https://imgnike-a.akamaihd.net/768x768/028179IDA1.jpg" alt="" />
                            <h3 className='text-lg font-light text-primary pt-2'>Moletom Nike SB</h3>
                            <h2 className='text-xl font-semibold text-cyan-600'>R$ 250,00</h2>
                        </div>
                        <div className='w-full h-[45vh] mr-5 bg-white rounded-lg shadow-lg text-center'>
                            <img src="https://imgnike-a.akamaihd.net/360x360/0245557T.jpg" alt="" />
                            <h3 className='text-lg font-light text-primary pt-2'>Moletom Nike SB</h3>
                            <h2 className='text-xl font-semibold text-cyan-600'>R$ 250,00</h2>
                        </div>
                        <div className='w-full h-[45vh] mr-5 bg-white rounded-lg shadow-lg text-center'>
                            <img src="https://imgnike-a.akamaihd.net/768x768/02848151A2.jpg" alt="" />
                            <h3 className='text-lg font-light text-primary pt-2'>Moletom Nike SB</h3>
                            <h2 className='text-xl font-semibold text-cyan-600'>R$ 250,00</h2>
                        </div>
                        <div className='w-full h-[45vh] mr-5 bg-white rounded-lg shadow-lg text-center'>
                            <img src="https://imgnike-a.akamaihd.net/360x360/02836051.jpg" alt="" />
                            <h3 className='text-lg font-light text-primary pt-2'>Moletom Nike SB</h3>
                            <h2 className='text-xl font-semibold text-cyan-600'>R$ 250,00</h2>
                        </div>
                        <div className='w-full h-[45vh] mr-5 bg-white rounded-lg shadow-lg text-center'>
                            <img src="https://imgnike-a.akamaihd.net/360x360/0095820L.jpg" alt="" />
                            <h3 className='text-lg font-light text-primary pt-2'>Moletom Nike SB</h3>
                            <h2 className='text-xl font-semibold text-cyan-600'>R$ 250,00</h2>
                        </div>
                    </div>
                </div>
                    <div className="w-full h-auto flex justify-center items-center">
                        <div 
                            className={`${activeCategory === 'SNEAKERS' ? 
                            'w-[30vh] text-center py-3 mx-5 my-5 bg-cyan-600 rounded-3xl cursor-pointer text-xl tp-2 text-white hover:bg-cyan-600 hover:rounded-3xl' : 
                            'w-[30vh] text-center py-3 mx-5 my-5 cursor-pointer text-xl tp-2 text-gray-500 hover:text-white hover:bg-cyan-600 hover:text-white hover:rounded-3xl'}`}
                            onClick={() => setActiveCategory('SNEAKERS')}
                            >
                            <h4>SNEAKERS</h4>
                        </div>
                        <div 
                            className={`${activeCategory === 'T-SHIRTS' ? 
                            'w-[30vh] text-center py-3 mx-5 my-5 bg-cyan-600 rounded-3xl cursor-pointer text-xl tp-2 text-white hover:bg-cyan-600 hover:text-white hover:rounded-3xl' : 
                            'w-[30vh] text-center py-3 mx-5 my-5 cursor-pointer text-xl tp-2 text-gray-500 hover:text-white hover:bg-cyan-600 hover:text-white hover:rounded-3xl'}`}
                            onClick={() => setActiveCategory('T-SHIRTS')}
                            >
                            <h4>T-SHIRTS</h4>
                        </div>
                        <div 
                            className={`${activeCategory === 'SOCKS' ? 
                            'w-[30vh] text-center py-3 mx-5 my-5 bg-cyan-600 rounded-3xl cursor-pointer text-xl tp-2 text-white hover:bg-cyan-600 hover:text-white hover:rounded-3xl ' :
                            'w-[30vh] text-center py-3 mx-5 my-5 cursor-pointer text-xl tp-2 text-gray-500 hover:text-white hover:bg-cyan-600 hover:rounded-3xl '}`}
                            onClick={() => setActiveCategory('SOCKS')}
                            >
                            <h4>SOCKS</h4>
                        </div>
                        <div 
                            className={`${activeCategory === 'JACKETS' ? 
                            'w-[30vh] text-center py-3 mx-5 my-5 bg-cyan-600 rounded-3xl cursor-pointer text-xl tp-2 text-white hover:bg-cyan-600 hover:rounded-3xl' :
                            'w-[30vh] text-center py-3 mx-5 my-5 cursor-pointer text-xl tp-2 text-gray-500 hover:text-white hover:bg-cyan-600 hover:text-white hover:rounded-3xl'}`}
                            onClick={() => setActiveCategory('JACKETS')}
                            >
                            <h4>JACKETS</h4>
                        </div>
                    </div>
                    <div className="px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((product, key) => 
                            <div className="bg-white w-full h-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto pb-5 my-10 text-center rounded-sm mx-auto" key={key}>
                                <div>
                                    <img src="https://droper-media.s3.amazonaws.com/16112020211036255.webp" alt="" className=" shadow-lg w-full h-[40vh] md:h-[30vh] lg:h-[40vh] rounded-sm object-cover" />
                                </div>
                                <div className='w-full px-5'>
                                    <h3 className="text-xl py-2">{product.name}</h3>
                                    <h3 className="text-2xl font-bold">$ {product.price.toFixed(2)}</h3>
                                    <button href="/product/1" className="w-full h-auto sm:w-full shadow-xl font-regular p-3 my-5 text-white bg-primary shadow-3xl hover:bg-primary rounded-md">Buy now</button>
                                    {/* <div className="w-full h-[8vh] flex justify-end items-center">
                                        <h3 className='text-md text-primary w-auto'>Selling by Isabela</h3>
                                        <img src="/images/users/user_isabela.jpg" className="w-auto cursor-pointer h-[6vh] md:h-[5vh] m-4 rounded-sm" alt="" />
                                    </div> */}
                                </div>
                            </div>
                        )}
                    </div>
            </div>
        </div>
    );
}