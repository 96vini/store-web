import React, { useState } from 'react';

export default function ProductView({ product }) {
  const [size, setSize] = useState();

  const handleSizeClick = (value) => {
    setSize(value);
  };

  const ProductSizeItem = ({ size, isSelected, onClick }) => (
    <div
      className={`w-10 h-10 bg-secondary hover:bg-primary mr-3 rounded-3xl text-white flex justify-center items-center mb-5 cursor-pointer ${
        isSelected ? 'bg-[#222]' : ''
      }`}
      onClick={onClick}
    >
      {size}
    </div>
  );

  return (
    <div>
        <div className="w-full h-auto flex justify-center py-20">
        <div className="w-[30%] px-10">
                <h2 className="text-3xl text-primary text-light font-semibold">{product.name.toUpperCase()}</h2>
                <h2 className="text-2xl text-primary mt-2">
                R$ {product.price},00
                </h2>
                <h5 className='text-md text-gray-500 font-light mt-2'>Ref.:FB9-3696-026-36</h5>
                <div className="mt-5 w-full h-auto flex justify-start items-center">
                <ProductSizeItem
                    size="S"
                    isSelected={size === 'S'}
                    onClick={() => handleSizeClick('S')}
                />
                <ProductSizeItem
                    size="M"
                    isSelected={size === 'M'}
                    onClick={() => handleSizeClick('M')}
                />
                <ProductSizeItem
                    size="L"
                    isSelected={size === 'L'}
                    onClick={() => handleSizeClick('L')}
                />
                </div>
                <div className="w-full h-auto mb-3">
                </div>
                <div className="flex justify-start w-full" onClick={() => alert('Adicionado ao carrinho')}>
                <button className="w-auto bg-primary px-4 text-white p-2 hover:bg-secondary rounded-sm flex justify-between">
                    ADD TO CART
                </button>
                </div>
            </div>
            <div className="w-[70%] flex justify-center">
                <div className='mr-5'>
                    <div className='w-[10vh] h-[10vh] mb-5 bg-gray-300 rounded-sm'>
                        <img src="https://imgnike-a.akamaihd.net/768x768/027263NXA3.jpg" alt="" />
                    </div>
                    <div className='w-[10vh] h-[10vh] mb-5 bg-gray-300 rounded-sm'>
                        <img src="https://imgnike-a.akamaihd.net/768x768/027263NXA4.jpg" alt="" />
                    </div>
                    <div className='w-[10vh] h-[10vh] mb-5 bg-gray-300 rounded-sm'>
                        <img src="https://imgnike-a.akamaihd.net/1920x1920/027263NXA6.jpg" alt="" />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <img src="https://imgnike-a.akamaihd.net/1920x1920/027263NX.jpg" className="rounded-sm" alt="" />
                    </div>
                    <div>
                        <img src="https://imgnike-a.akamaihd.net/1920x1920/027263NXA1.jpg" className="rounded-sm" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full h-screen py-10">
            <h2 className='text-3xl text-center text-[#444]'>Related products</h2>
                    <div class="px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <div class="bg-white w-full h-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto pb-5 my-10 text-center rounded-lg mx-auto">
                            <div>
                                <img src="https://droper-media.s3.amazonaws.com/16112020211036255.webp" alt="" class=" shadow-md w-full h-[40vh] md:h-[30vh] lg:h-[40vh] rounded-md object-cover" />
                            </div>
                            <div className='w-full px-5'>
                                <h3 class="text-xl py-2">Yeezy Boost</h3>
                                <h3 class="text-2xl text-gray-500">$ 50.00</h3>
                                <button href="/product/1" class="w-full h-auto sm:w-full shadow-xl font-bold p-3 my-5 text-white bg-primary shadow-3xl hover:bg-[#999] rounded-sm">Buy now</button>
                                <div class="w-full h-[8vh] flex justify-end items-center">
                                    <h3 className='text-md text-primary w-auto'>Selling by Isabela</h3>
                                    <img src="/images/users/user_isabela.jpg" class="w-auto cursor-pointer h-[6vh] md:h-[5vh] m-4 rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="bg-white w-full h-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto pb-5 my-10 text-center rounded-lg mx-auto">
                            <div>
                                <img src="https://droper-media.s3.amazonaws.com/16112020211036255.webp" alt="" class=" shadow-md w-full h-[40vh] md:h-[30vh] lg:h-[40vh] rounded-md object-cover" />
                            </div>
                            <div className='w-full px-5'>
                                <h3 class="text-xl py-2">Yeezy Boost</h3>
                                <h3 class="text-2xl">$ 50.00</h3>
                                <button href="/product/1" class="w-full h-auto sm:w-full shadow-xl font-bold p-3 my-5 text-white bg-primary shadow-3xl hover:bg-[#999] rounded-sm">Buy now</button>
                                <div class="w-full h-[8vh] flex justify-end items-center">
                                    <h3 className='text-md text-primary w-auto'>Selling by Isabela</h3>
                                    <img src="/images/users/user_isabela.jpg" class="w-auto cursor-pointer h-[6vh] md:h-[5vh] m-4 rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="bg-white w-full h-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto pb-5 my-10 text-center rounded-lg mx-auto">
                            <div>
                                <img src="https://droper-media.s3.amazonaws.com/16112020211036255.webp" alt="" class=" shadow-md w-full h-[40vh] md:h-[30vh] lg:h-[40vh] rounded-md object-cover" />
                            </div>
                            <div className='w-full px-5'>
                                <h3 class="text-xl py-2">Yeezy Boost</h3>
                                <h3 class="text-2xl">$ 50.00</h3>
                                <button href="/product/1" class="w-full h-auto sm:w-full shadow-xl font-bold p-3 my-5 text-white bg-primary shadow-3xl hover:bg-[#999] rounded-sm">Buy now</button>
                                <div class="w-full h-[8vh] flex justify-end items-center">
                                    <h3 className='text-md text-primary w-auto'>Selling by Isabela</h3>
                                    <img src="/images/users/user_isabela.jpg" class="w-auto cursor-pointer h-[6vh] md:h-[5vh] m-4 rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="bg-white w-full h-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto pb-5 my-10 text-center rounded-lg mx-auto">
                            <div>
                                <img src="https://droper-media.s3.amazonaws.com/16112020211036255.webp" alt="" class=" shadow-md w-full h-[40vh] md:h-[30vh] lg:h-[40vh] rounded-sm object-cover" />
                            </div>
                            <div className='w-full px-5'>
                                <h3 class="text-xl py-2">Yeezy Boost</h3>
                                <h3 class="text-2xl">$ 50.00</h3>
                                <button href="/product/1" class="w-full h-auto sm:w-full shadow-xl font-bold p-3 my-5 text-white bg-primary shadow-3xl hover:bg-[#999] rounded-sm">Buy now</button>
                                <div class="w-full h-[8vh] flex justify-end items-center">
                                    <h3 className='text-md text-primary w-auto'>Selling by Isabela</h3>
                                    <img src="/images/users/user_isabela.jpg" class="w-auto cursor-pointer h-[6vh] md:h-[5vh] m-4 rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
  );
}
