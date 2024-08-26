import React from 'react'
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navitate = useNavigate();
  
  const onLogout = () => {
    console.log("xxx");
    navitate('/', {
      replace: true,
    });
  };

  return (
    <>
        <div>LoginPage</div>
        <button onClick={onLogout} className='bg-blue-600 ml-5'>login</button>
    </>

  )
}
