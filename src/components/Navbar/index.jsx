import React, { useContext, useState, useEffect } from 'react';
import { SearchInput } from './styles';
import AuthContext from '../../contexts/AuthContext';

import api from '../../services/api';

export default function Navbar() {
    const { user, logout, isLoggedIn, firstNameLogged } = useContext(AuthContext);
    const [showCart, setShowCart] = useState(false);
    const [activeSearch, setActiveSearch] = useState(false);
    const [setErrMessage, errMessage] = useState('');
    const [results, setResults] = useState();
    const [param, setParam] = useState('');

    const handleLogout = () => {
        logout();
    }

    const handleSearch = (e) => {
        const text = e.target.value;

        if (text.length > 3) {
            fetchResults();
            setActiveSearch(true);
        } else {
            setActiveSearch(false);
        }
    };

    const fetchResults = async(param) => {
        await api.post('/posts', {
            param
        })
        .then(res => setResults(res.data))
        .catch(err => setErrMessage(err))
    };

    return (
        <div>
            <div className='w-full h-10 bg-cyan-800 flex justify-end items-center text-white'>
                <div className='w-1/3 h-10 px-7 py-2'>
                    <ul className='w-full flex justify-end grid-cols-3 gap-6'>
                        {isLoggedIn ? (
                            <li className='text-sm'>
                            Welcome back, <span className='font-semibold'>{firstNameLogged}</span>
                        </li>
                        ) : (
                            <li className='text-sm'>
                                <a href="/">Not logged in</a>
                            </li>
                        )}
                        <li className='text-sm underline'>
                            {isLoggedIn ? ( 
                                <a onClick={handleLogout} href="/">Logout</a>
                            ) : 
                            (
                                <a href="/login">Sign In</a>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-cyan-600 w-full h-20 flex justify-center items-center">
                <div className='md:w-[100%] sm:w-[100%] flex justify-center items-center'>
                    <div className='w-1/4 flex justify-center items-center'>
                        <a href="/">
                            <div className='text-white'>
                                <img src="/images/logotipo.png" className="w-[4vh]" alt="" />
                            </div>
                        </a>
                    </div>
                    <div className='w-1/3 h-auto grid grid-cols-1'>
                        <SearchInput onChange={(e) => setParam(e.target.value)} className="w-full text-cyan-800 bg-white border-cyan-600 rounded-md" type="text" placeholder='Buscar' onClick={handleSearch} />
                        {activeSearch &&
                            <div className='w-1/4 h-auto mt-[8vh] rounded-md p-2 bg-white shadow-sm shadow-secondary absolute z-50 text-center' onAuxClick={() => setActiveSearch(false)}>
                                <div className='w-full bg-[#AAA] p-2 h-[9vh]'></div>
                                <div className='w-full bg-[#BBB] p-2 h-[9vh]'></div>
                                <div className='w-full bg-[#CCC] p-2 h-[9vh]'></div>
                                <div className='w-full bg-[#DDD] p-2 h-[9vh]'></div>
                                <div className='w-full bg-[#EEE] p-2 h-[9vh]'></div>
                            </div>
                        }
                    </div>
                    <div className='w-1/4 h-auto flex justify-end items-center pl-5'>
                        <div className='w-1/2' onClick={() => setShowCart(!showCart)}>
                            <div className='text-primary flex justify-around items-center'>
                                <a className='text-white hover:text-cyan-800' >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <a className='text-white hover:text-cyan-800' href='/cart'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
