import React, { useState } from 'react';
import backgroundImage from '../assets/afritsy.jpg';
import { login } from '../API/Auth.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Call the login API endpoint with the email and password
      const { token, user } = await login(email, password);
      // If login is successful
      console.log('Logged in user:', user);
      console.log('Token:', token);
    } catch (error) {
      // If login fails
      console.error('Error logging in:', error);
    }
  };

  return (
    <>
      <div className="bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="h-screen flex justify-center items-center">
          <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3 bg-opacity-70"> 
            <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
            <form onSubmit={handleLogin}> 
              <div className="mb-4">
                <label className="block font-semibold text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email" type="email" placeholder="Enter your email address"
                  value={email} onChange={(e) => setEmail(e.target.value)} /> 
              </div>
              <div className="mb-4">
                <label className="block font-semibold text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password" type="password" placeholder="Enter your password"
                  value={password} onChange={(e) => setPassword(e.target.value)} /> 
              </div>
              <div className="mb-6">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"> 
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
