import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo/Foodieland..png'

const Header = () => {
    return (
        <nav className='flex flex-col lg:flex-row gap-5 items-center justify-between mx-10 my-5'>

            <div>
                <Link to="/"> <img className='w-[150px]' src={logo} alt="" /></Link>
            </div>

            <div className='flex'>

                <button className='mr-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </button>
                <Link to='/home' className='mr-5 hover:text-orange-500 font-medium'>Home</Link>
                <Link to="/login" className='mr-5 hover:text-orange-500 font-medium'>Login</Link>
                <Link to="/signup" className='mr-5 font-medium hover:text-orange-500'>Sign up</Link>

            </div>
        </nav>
    );
};

export default Header;