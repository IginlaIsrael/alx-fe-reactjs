import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './components/Profile';
import UserProfile from './pages/UserProfile';
import BlogPost from './pages/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import useAuth from './hooks/useAuth';

function App() {
  const { login, logout, isAuthenticated } = useAuth(); // Use the hook here

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/blog/1">Blog Post 1</Link>
          </li>
          <li>
            <Link to="/blog/2">Blog Post 2</Link>
          </li>
          <li>
            <button onClick={isAuthenticated ? logout : login}>
              {isAuthenticated ? 'Logout' : 'Login'}
            </button>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/*" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
