import React from 'react';
import Navbar from '../Navbar';

export default function ProductNotFound() {
    return (
        <div className="w-full h-screen">
            <div className="flex justify-center items-center">
                <div className="h-[20vh] w-[20vh]">
                    <img src="/images/not-found-icon.png" alt="" />
                </div>
                <div>
                    <h1 className="text-2xl text-cyan-600">Product not found</h1>
                </div>
            </div>
        </div>
    );
}