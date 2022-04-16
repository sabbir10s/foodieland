import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo/Foodieland..png';
import facebook from '../../images/Logo/facebook.png';
import instagram from '../../images/Logo/instagram.png';
import twitter from '../../images/Logo/twitter.png';
import './footer.css';

const Footer = () => {
    return (
        <div className='mt-10 mx-10'>
            <img src={logo} className='w-[100px]' alt="" />
            <div className='footer-text mt-3'>
                <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                <div className='flex gap-8'>
                    <Link to='/'>Recipes</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>About us</Link>
                </div>
            </div>
            <div className='flex gap-7 justify-items-end mt-10'>
                <Link to="/"><img className='w-[15px]' src={facebook} alt="" /></Link>
                <Link to="/"><img className='w-[30px]' src={instagram} alt="" /></Link>
                <Link to="/"><img className='w-[30px]' src={twitter} alt="" /></Link>
            </div>
        </div>
    );
};

export default Footer;