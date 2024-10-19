import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // You’ll create this component later
import './App.css'; // Assuming you want to include some global styles
import React from 'react';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <h1 className="text-4xl font-bold text-center mt-10">GitHub User Search</h1>
          <Search />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
