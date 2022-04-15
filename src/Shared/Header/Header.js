import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo/Foodieland..png';

const Header = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className='w-[180px]' src={logo} alt="" />
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link to='/home' className="mr-5 hover:text-gray-900">First Link</Link>
                    <Link to='/' className="mr-5 hover:text-gray-900">Second Link</Link>
                    <Link to='/' className="mr-5 hover:text-gray-900">Third Link</Link>
                    <Link to='/' className="mr-5 hover:text-gray-900">Fourth Link</Link>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                </button>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign Up
                </button>
            </div>
        </header>
    );
};

export default Header;