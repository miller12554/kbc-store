import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
const Logout = () => {

const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLog = async () => {
    try {
      await logOut();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>Logout  <button onClick={handleLog} className='border px-6 py-2 my-4'>
        Logout
      </button></div>
  )
}

export default Logout