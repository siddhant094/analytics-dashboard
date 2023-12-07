import React, { useState } from 'react';

import '../index.css';

const login = () => {
    const [loginMode, setLoginMode] = useState(true);

    const loginModehandler = (e) => {
        e.preventDefault();
        setLoginMode(!loginMode);
    };

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='p-20 bg-slate-50 rounded-xl shadow-xl'>
                <span className='flex items-center justify-center p-4'>
                    {loginMode ? 'LOGIN' : 'SIGNUP'}
                </span>
                {loginMode ? (
                    <form action='' className='flex flex-col items-center'>
                        <input
                            type='text'
                            placeholder='Enter Email'
                            className='border rounded-lg px-2 py-1 w-[300px]'
                        />
                        <input
                            type='passoword'
                            placeholder='Enter Passoword'
                            className='border rounded-lg px-2 py-1 mt-4 w-[300px]'
                        />
                        <button
                            className='text-blue'
                            onClick={loginModehandler}
                        >
                            Switch to Signup
                        </button>
                        <button type='submit'>LOGIN</button>
                    </form>
                ) : (
                    <form action='' className='flex flex-col items-center'>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            className='border rounded-lg px-2 py-1 w-[300px]'
                        />
                        <input
                            type='text'
                            placeholder='Enter Email'
                            className='border rounded-lg px-2 py-1 w-[300px] my-4'
                        />
                        <input
                            type='passoword'
                            placeholder='Enter Passoword'
                            className='border rounded-lg px-2 py-1 w-[300px]'
                        />
                        <button
                            className='text-blue'
                            onClick={loginModehandler}
                        >
                            Switch to Signup
                        </button>
                        <button type='submit'>LOGIN</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default login;
