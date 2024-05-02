import { useEffect, useState } from 'react';


export default function CartView(products) {

    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState(0.00);
    const [price, setPrice] = useState(13.34);

    useEffect(() => {
        setAmount(price * quantity);
    }, [quantity]);

    const handlePlus = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const handleMinus = () => {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return (
        <div className='w-full h-screen pt-[10vh]'>
            <div className='w-full text-center flex justify-center'>
                <div className='w-1/2 shadow-md h-auto mx-2'>
                    <div className='w-full px-[5vh] py-[2vh]'>
                        <div className='flex justify-start'>
                            <div>
                                <img src="https://imgnike-a.akamaihd.net/360x360/0095820L.jpg" className="w-48" alt="" />
                            </div>
                            <div className='text-left w-5/6 px-5'>
                                <h1 className='text-lg text-cyan-800 font-semibold'>Camisa Corinthians</h1>
                                <h1 className='text-xl text-secondary font-light'>${amount.toFixed(2)}</h1>
                            </div>
                            <div className='w-1/6 flex justify-around'>
                                <div onClick={handleMinus} className='text-cyan-600 w-auto cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                    </svg>
                                </div>
                                <div className='px-3'>
                                    <input type="text" onChange={(e) => setQuantity(e.target.value)} className='text-secondary border-gray-200 rounded-lg text-center w-20' value={quantity} />
                                </div>
                                <div onClick={handlePlus} className='text-cyan-600 w-auto cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/3 shadow-md h-auto'>
                    <div className='w-full bg-cyan-600 text-white h-auto p-5'>
                        <h3 className='text-xl text-center'>Resume</h3>
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