import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [message, setMessage] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        console.log(error);
    }
    if (user) {
        console.log(user);
    }
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/signup')
    }
    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div>
            <p className='text-center text-3xl my-8 font-semibold'>Login your account</p>
            <form onSubmit={handleSignIn} className='flex flex-col gap-3 items-center'>

                <input className='input block  border-orange-500 w-full max-w-xs'
                    type="email" name="email" id="" placeholder='Your Email' />

                <input className='input block  border-orange-500 w-full max-w-xs'
                    type="password" name="password" placeholder='Password' id="" />

                <p style={{ color: "red" }}>{error?.message}</p>
                
                <input className='bg-black py-3 rounded-md text-white w-full max-w-xs'
                    type="submit" value="Login" />
            </form>
            <p className='text-center my-3 font-semibold'>New to Foodieland? <span onClick={navigateLogin} className='text-orange-500 cursor-pointer'>Sign-Up here</span></p>
        </div>
    );
};

export default Login;