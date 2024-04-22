import React from 'react';

export default function CartView(products) {

    return (
        <div className='w-full h-screen pt-[10vh]'>
            <div className='w-full text-center flex justify-center'>
            
                <div className='w-1/2 shadow-md h-auto mx-2'>
                    <div className='w-2/5 px-[5vh] py-[2vh]'>
                        <div className='w-full'>
                            <img src="/images/products/camisa_corinthians.png" className="h-[10vh]" alt="" />
                        </div>
                    </div>
                    <div className='w-2/5 px-[5vh] py-[2vh]'>
                        <div className='w-full'>
                            <img src="/images/products/camisa_corinthians.png" className="h-[10vh]" alt="" />
                        </div>
                    </div>
                    <div className='w-2/5 px-[5vh] py-[2vh]'>
                        <div className='w-full'>
                            <img src="/images/products/camisa_corinthians.png" className="h-[10vh]" alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-1/3 shadow-md h-auto'>
                    <div className='w-full bg-primary text-white h-auto p-5'>
                        <h3 className='text-xl text-center'>Resumo da compra</h3>
                    </div>
                    <div className='w-2/5 p-[5vh]'>
                        <div className='w-full py-2'>
                            <h1>item</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}