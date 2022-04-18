import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const navigate = useNavigate();



    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    // user 
    if (user) {
        navigate(from, { replace: true });
    }

    // for sign in
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Log in</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    {/* ---- error------- */}
                    <p style={{ çolor: 'red' }}>{error?.message}</p>
                    {/* --- loading --- */}
                    {
                        loading && <p>loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-John ? <Link className='form-link' to='/signup'>Create an Account</Link></p>
            </div>
        </div>
    );
};

export default Login;