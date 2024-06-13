import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../API/Auth.js';

function Logout({ isLoggedIn, setIsLoggedIn, setEmail }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      const token = sessionStorage.getItem('token');
      if (token) {
        logout(token)
          .then(() => {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('email');
            setIsLoggedIn(false);
            setEmail('');
            navigate('/login');
          })
          .catch((error) => {
            console.error('Error logging out:', error);
          });
      }
    } else {
      navigate('/login');
    }
  }, [isLoggedIn, setIsLoggedIn, setEmail, navigate]);

  return null;
}

export default Logout;
