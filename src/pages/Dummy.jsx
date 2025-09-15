// import React, { useState } from 'react'

// const Dummy = () => {
//     const [count, setCount] = useState(0);


//     const addNumber = () => {
//         setCount(count + 1);
//         console.log(count);
//     }

//     const subsNumber = () =>{
//         setCount(count-1);
//         console.log(count);
//     }

//     const resetNumber = () => {
//         setCount(0);
//     }
//     return (
//         <div>
//             <p className='text-center bg-gray-400 py-[40px] mb-[25px] text-3xl font-bold'>{count}</p>
//             <div className='flex justify-center '>
//                 <button onClick={addNumber} className='px-[30px] py-[10px] bg-green-800 mx-[10px] text-white rounded-md border-0'>add</button>
//                 <button onClick={subsNumber} className='px-[30px] py-[10px] bg-red-800 mx-[10px] text-white rounded-md border-0'>substract</button>
//                 <button onClick={resetNumber} className='px-[30px] py-[10px] bg-orange-800 mx-[10px] text-white rounded-md border-0'>reset</button>
//             </div>
//         </div>
//     )
// }

// export default Dummy


const Playground = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        const localStorageValue = parseInt(localStorage.getItem('detail'));
        console.log(typeof localStorageValue);
        setCount(localStorageValue);
    },[]);

    const addNumber = () => {
        const val = count + 1;
        setCount(val);
        localStorage.setItem("detail",val);
    }

    const subsNumber = () => {
        const val = count - 1
        setCount(val);
        localStorage.setItem("detail",val);
    }

    const resetNumer = () => {
        setCount(0);
        localStorage.setItem("detail",0);
    }



    return (
        <div>
            <div>
                <p className='text-5xl mb-9 flex justify-center'>{count}</p>
                <div className='flex justify-center'>
                    <button onClick={addNumber} className='px-[20px] py-[20px] text-black font-bold bg-amber-900 rounded-md border-0 mr-6'>Add</button>
                    <button onClick={subsNumber} className='px-[20px] py-[20px] text-black font-bold bg-amber-200 rounded-md border-0 mr-6'>substract</button>
                    <button  onClick={resetNumer} className='px-[20px] py-[20px] text-black font-bold bg-amber-600 rounded-md border-0'>Restore</button>
                </div>
            </div>
        </div>
    )
}

export default Playground

