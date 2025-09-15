import React, { useState, useEffect } from "react";

const Playground = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const localStorageValue = parseInt(localStorage.getItem("detail")) || 0;
        console.log(typeof localStorageValue);
        setCount(localStorageValue);
    }, []);

    const addNumber = () => {
        const val = count + 1;
        setCount(val);
        localStorage.setItem("detail", val);
    };

    const subsNumber = () => {
        const val = count - 1;
        setCount(val);
        localStorage.setItem("detail", val);
    };

    const resetNumber = () => {
        setCount(0);
        localStorage.setItem("detail", 0);
    };

    return (
        <div>
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
