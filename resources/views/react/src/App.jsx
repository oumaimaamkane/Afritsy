// import React, { useEffect, useState } from 'react';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import Login from './pages/Login.jsx';
// import NotFound from './pages/NotFound.jsx';
// import About from './pages/About.jsx';
// import Project from './pages/Project.jsx';
// import Contact from './pages/Contact.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import Logout from './pages/Logout.jsx';
// import SinglePageProject from './pages/SinglePageProject.jsx'

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     const token = sessionStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//       const storedEmail = sessionStorage.getItem('email');
//       if (storedEmail) {
//         setEmail(storedEmail);
//       }
//     } else {
//       setIsLoggedIn(false);
//       setEmail('');
//     }
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/project" element={<Project />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/SinglePageProject" element={<SinglePageProject />} />
//         <Route path="/login" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} setEmail={setEmail} /> : <Navigate to="/" />} />
//         <Route path="*" element={<NotFound />} />

//         {/* Private Routes */}
//         <Route path="/dashboard" element={isLoggedIn ? <Dashboard email={email} /> : <Navigate to="/login" />} />
//         <Route path="/logout" element={<Logout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setEmail={setEmail} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;





import React, { useEffect, useState, createContext, useContext } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import About from './pages/About.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Logout from './pages/Logout.jsx';
import SinglePageProject from './pages/SinglePageProject.jsx';
import Services from './pages/Dashboard/Services.jsx';
import Member from './pages/Dashboard/Member.jsx';
import Pays from './pages/Dashboard/Pays.jsx';
import Projects from './pages/Dashboard/Projects.jsx';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const storedEmail = sessionStorage.getItem('email');
      if (storedEmail) {
        setEmail(storedEmail);
      }
    }
  }, []);

  const login = (email, token) => {
    setIsLoggedIn(true);
    setEmail(email);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('token', token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setEmail('');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, email, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SinglePageProject" element={<SinglePageProject />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />

          {/* Private Routes */}
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          {/* <Route path="/dashboard" element={<Dashboard />}/> */}
          <Route path="/Services" element={<Services />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/Pays" element={<Pays />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/logout" element={<ProtectedRoute element={<Logout />} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export { useAuth };
export default App;

{/* <Route path="/Services" element={<ProtectedRoute element={<Services />} />} />
<Route path="/Member"  element={<ProtectedRoute element={<Member />} />} />
<Route path="/Pays" element={<ProtectedRoute element={<Pays />} />} />
<Route path="/Projects" element={<ProtectedRoute element={<Projects />} />} /> */}