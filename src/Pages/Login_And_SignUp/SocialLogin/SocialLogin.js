import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle, useSignInWithMicrosoft } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import googleLogo from '../../../images/Logo/Google.png'
import github from '../../../images/Logo/GitHub.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    return (
        <div className='flex justify-center first-letter:'>

            <button
                className='mx-2 btn border-1 bg-white text-black hover:bg-white hover:shadow-xl'
                onClick={() => signInWithGoogle()} >
                <img className='w-[40px]' src={googleLogo} alt="" />
                <span className='mx-1'>Google</span>
            </button>
            <button
                className='mx-2 btn border-1 bg-white text-black hover:bg-white hover:shadow-xl'
                onClick={() => signInWithGithub()} >
                <img className='w-[40px]' src={github} alt="" />
                <span className='mx-1'>Google</span>
            </button>

        </div>
    );
};

export default SocialLogin;