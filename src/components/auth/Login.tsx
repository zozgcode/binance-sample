"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import usersData from './users.json';
import Header from '../header/Header';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = usersData.users.find((user: any) => user.username === username);
    if (!user) {
      setError('User not found');
      return;
    }
    if (user.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    router.push('/dashboard');
  };
  
  return (
    <div className=''>
      <Header />
      <div className='h-screen px-[24px]'>
        <div>
        {error && <p className='text-[#FCD535] text-center text-[18px]'>{error}</p>}
        </div>
        <div className="mt-5">
          <div className="mx-auto rounded-xl max-w-[100%]">
            <form onSubmit={handleLogin}>
              <h3 className='text-[28px] text-white font-semibold mb-[20px]'>Log in</h3>
              <div className='flex flex-col gap-2 mb-[28px]'>
                <label htmlFor="username" className='text-[14px] font-medium leading-[22px] text-[#848E9C]'>Email/Phone number</label>
                <input type="text" value={username} placeholder='Username' className='bg-transparent text-[16px] text-[#EAECEF] h-[58px] rounded-[10px] py-[6px] px-[10px] border border-[#474D57] outline-none'
                onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="password" className='text-[14px] font-medium leading-[22px] text-[#848E9C]'>Password</label>
                <input type="text" value={password} placeholder='Password' className='bg-transparent text-[16px] text-[#EAECEF] h-[58px] rounded-[10px] py-[6px] px-[10px] border border-[#474D57] outline-none'
                onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              <div className='flex flex-col gap-2 mt-12'>
                <button type='submit' className="h-[58px] w-full leading-[24px] rounded-[10px] px-[15px] text-[16px] bg-[#FCD535] text-[#202630] font-semibold">Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
