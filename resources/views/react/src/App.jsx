import React from 'react';
import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Logout from './pages/Logout.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      setIsLoggedIn(true);
      console.log("is logged in");
      const storedEmail = localStorage.getItem('email');
      if (storedEmail) {
        setEmail(storedEmail);
      }
    } else {
      console.log('is not logged in');
      setIsLoggedIn(false);
      setEmail('');
    }
  
  }, []);
  return (
    <>
      <BrowserRouter>
        {/* {isLoggedIn} */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/login" element={
            !isLoggedIn ? 
            <Login/> : 
            <Navigate to="/" />} />
          <Route path="/dashboard" element={
            isLoggedIn ? 
            <Dashboard email={email} /> :
            <Navigate to="/login" /> 
             } />
          <Route path="/logout" element={<Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setEmail={setEmail}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
