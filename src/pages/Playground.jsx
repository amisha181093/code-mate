import React, { useState, useEffect } from 'react';

const Playground = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const localStorageValue = parseInt(localStorage.getItem('detail')) || 0;
        console.log(typeof localStorageValue);
        setCount(localStorageValue);
    }, []);

    const addNumber = () => {
        const val = count + 1;
        setCount(val);
        localStorage.setItem('detail', val);
    };

    const subsNumber = () => {
        const val = count - 1;
        setCount(val);
        localStorage.setItem('detail', val);
    };

    const resetNumber = () => {
        setCount(0);
        localStorage.setItem('detail', 0);
    };

    return (
        <div>
            <div className="carousel rounded-box">
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                        alt="Burger"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                        alt="Burger"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                        alt="Burger"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                        alt="Burger"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                        alt="Burger"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                        alt="Burger"
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                        alt="Burger"
                    />
                </div>
            </div>
            <p className="text-5xl mb-9 flex justify-center">{count}</p>
            <div className="flex justify-center">
                <button
                    onClick={addNumber}
                    className="px-[20px] py-[20px] text-black font-bold bg-blue-600 rounded-md border-0 mr-6"
                >
                    Add
                </button>
                <button
                    onClick={subsNumber}
                    className="px-[20px] py-[20px] text-black font-bold bg-blue-300 rounded-md border-0 mr-6"
                >
                    Subtract
                </button>
                <button
                    onClick={resetNumber}
                    className="px-[20px] py-[20px] text-black font-bold bg-blue-900 rounded-md border-0"
                >
                    Restore
                </button>
            </div>
        </div>
    );
};

export default Playground;
