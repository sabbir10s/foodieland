import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/home');
    }
    if (error) {
        console.log(error);
    }
    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {
            return setMessage('Password can not match');
        }
        createUserWithEmailAndPassword(email, password);

    }
    return (
        <div>
            <p className='text-center text-3xl my-8 font-semibold'>Creat your account</p>
            <form onSubmit={handleRegister} className='flex flex-col gap-3 items-center'>
                <input className='input block  border-orange-500 w-full max-w-xs'
                    type="text" name='name' placeholder='Name' required />

                <input className='input block  border-orange-500 w-full max-w-xs'
                    type="email" name="email" id="" placeholder='Your Email' required />

                <input className='input block  border-orange-500 w-full max-w-xs'
                    type="password" name="password" placeholder='Password' id="" required />

                <input className='input block  border-orange-500 w-full max-w-xs'
                    type="password" name="confirmPassword" placeholder='Confirm Password' id="" required />
                <p style={{ color: "red" }}>{error?.message}</p>
                <p className='text-red-600'>{message}</p>
                <input className='bg-black py-3 rounded-md text-white w-full max-w-xs'
                    type="submit" value="Sign Up" />
            </form>

            <p className='text-center my-3 font-semibold'>All ready have an account? <span onClick={navigateLogin} className='text-orange-500 cursor-pointer'>Please Login</span></p>

            <SocialLogin />
        </div>
    );
};

export default SignUp;