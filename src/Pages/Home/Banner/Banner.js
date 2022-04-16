import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='grid grid-cols-2 banner-container w-[100%] h-[200px] lg:h-[90vh]'>

            <div className='bg-black banner-content w-[100%] h-[200px] lg:h-[90vh] bg-opacity-50'>
                <div className='banner-text'>
                    <p className='text-center text-white text-2xl lg:text-5xl mb-5 lg:mb-10'>Spicy delicious chicken wings</p>
                    <div>
                        <input className=' border-0 rounded-r-none rounded-l-full border-orange-500 px-2 lg:px-5 py-1 text-sm lg:text-2xl' type="search" name="search" id="" />
                        <button className='bg-black text-white px-5 lg:px-10 py-1 rounded-l-none rounded-r-full text-sm lg:text-2xl'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;