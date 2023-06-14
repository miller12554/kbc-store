import React from 'react';
import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Account = () => {
 const { logOut, user } = UserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      Navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleLogout} className='border py-2 px-5 mt-10'>
        Logout
      </button>
    </div>
  );
};

export default Account;