import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './components/Profile';
import UserProfile from './pages/UserProfile';
import BlogPost from './pages/BlogPost';  // Import the BlogPost component
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/blog/1">Blog Post 1</Link></li>  {/* Example link to blog post */}
          <li><Link to="/blog/2">Blog Post 2</Link></li>  {/* Example link to blog post */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/*" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path="/blog/:id" element={<BlogPost />} />  {/* Add dynamic route here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
