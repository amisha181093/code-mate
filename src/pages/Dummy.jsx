import React from 'react'

const Dummy = () => {

    return (
        <div>
            <p className='text-center bg-gray-400 py-[40px] mb-[25px] text-3xl font-bold'>0</p>
            <div className='flex justify-center '>
                <button className='px-[30px] py-[10px] bg-green-800 mx-[10px] text-white rounded-md border-0'>add</button>
                <button className='px-[30px] py-[10px] bg-red-800 mx-[10px] text-white rounded-md border-0'>sunstract</button>
                <button className='px-[30px] py-[10px] bg-orange-800 mx-[10px] text-white rounded-md border-0'>reset</button>
            </div>
        </div>
    )
}

export default Dummy
